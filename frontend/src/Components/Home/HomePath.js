import React, { useState } from "react";
import HeroComponent from "./HeroComponent";
import NavComponent from "./NavComponent";
import SideBar from "./SideBar";

const HomePath = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavComponent toggle={toggle} />
      <HeroComponent />
    </div>
  );
};

export default HomePath;
