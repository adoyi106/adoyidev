import { useEffect } from "preact/hooks";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import MobileButton from "../ui/MobileButton";
import { useState } from "react";

function Header() {
  //control opening and closing of mobile icons
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);

  // close navigation when scroll happens
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky h-[9.8rem] py-0 px-[4.8rem] justify-between items-center flex text-[#2d2e32] font-poppins">
      <Logo />
      <MainNav isOpen={isOpen} />
      <MobileButton isOpen={isOpen} toggle={toggle} />
    </header>
  );
}

export default Header;
