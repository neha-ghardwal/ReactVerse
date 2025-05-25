import React, { useRef, useState, useEffect } from "react";
import { OrbitingCirclesDemo } from "./OrbitingCircles";
import JsionPage from "../Topics/Jsion";
import ProporaPage from "../Topics/ProPora";
import ComponoPage from "../Topics/Compono";
import { gradients } from "../../components/utils/gradient";

const LandingPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [JsionPage, ProporaPage, ComponoPage];

  const sectionWidth = () => window.innerWidth * 0.5;

  const scrollToSection = (i: number) => {
    if (!scrollRef.current) return;
    setActiveSection(i);
    scrollRef.current.scrollTo({
      left: i * sectionWidth(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      // find the nearest index
      const idx = Math.round(scrollLeft / sectionWidth());
      if (idx !== activeSection) {
        setActiveSection(idx);
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [activeSection]);

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <div className="absolute inset-0 z-10">
        <OrbitingCirclesDemo />
      </div>

      {/* //gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={gradients[activeSection].style}
      />

      <div
        ref={scrollRef}
        className="
          relative z-10
          h-screen w-screen
          overflow-x-auto overflow-y-hidden
          flex
          snap-x snap-mandatory
          px-[25vw] mt-[15vh]
          scroll-smooth
        "
      >
        {sections.map((Component, i) => (
          <section
            key={i}
            onClick={() => scrollToSection(i)}
            className={`
              snap-center
              flex-shrink-0
              w-[58vw]
              h-full
              flex items-center justify-center
              cursor-pointer
              transition-transform duration-300
              ${i === activeSection ? "animate-spin-slow" : ""}
            `}
          >
            <Component />
          </section>
        ))}
      </div>
    </main>
  );
};

export default LandingPage;
