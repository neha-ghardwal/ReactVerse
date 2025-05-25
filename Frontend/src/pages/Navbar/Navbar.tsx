import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className = "" }) => (
  <a href="#" className={`px-4 py-2 hover:text-gray-300 ${className}`}>
    {children}
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-[40.22px] z-10 px-40 bg-transparent text-white w-screen">
      <div className="flex items-center justify-between h-16 w-full text-sm font-extralight font-Satoshi">
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem className="uppercase font-Satoshi font-stretch-125% tracking-widest font-light text-xl">
          ReactVerse
        </NavItem>
        <NavItem>Galaxies</NavItem>
        <NavItem>React</NavItem>
        <NavItem>Login</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
