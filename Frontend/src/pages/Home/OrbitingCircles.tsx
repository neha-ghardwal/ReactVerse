import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import SunIcon from "@/assets/sun.svg";
import MarsIcon from "@/assets/mars.png";
import saturn from "@/assets/saturn.png";
import neptune from "@/assets/neptune.png";
import earth from "@/assets/earth.png";
import mercury from "@/assets/mercury.png";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-full w-full mt-[20vh] flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles />
      <OrbitingCircles iconSize={40} radius={180} reverse speed={0.4}>
        <Icons.mercury />
        <Icons.neptune />
      </OrbitingCircles>
      <OrbitingCircles iconSize={50} speed={0.1} radius={260}>
        <Icons.mars />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} speed={0.2} radius={370} reverse>
        <Icons.earth />
      </OrbitingCircles>
      <OrbitingCircles iconSize={70} speed={0.1} radius={460}>
        <Icons.saturn />
        <Icons.mars />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} speed={0.2} radius={550} reverse>
        <Icons.neptune />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={640} reverse speed={0.4}>
        <Icons.mercury />
        <Icons.neptune />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  sun: () => <img src={SunIcon} width={250} height={250} alt="Sun" />,
  mars: () => <img src={MarsIcon} width={150} height={150} alt="mars" />,
  saturn: () => <img src={saturn} width={150} height={150} alt="saturn" />,
  neptune: () => <img src={neptune} width={150} height={150} alt="neptune" />,
  earth: () => <img src={earth} width={150} height={150} alt="earth" />,
  mercury: () => <img src={mercury} width={150} height={150} alt="mercury" />,
};
