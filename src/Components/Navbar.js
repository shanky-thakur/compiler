import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-3 pt-3 pb-3">
        <h1 className="text-4xl text-white font-serif cursor-default font-semibold pt-1">
          Code Write - Compiler
        </h1>
        <div>
          <img src="./Code Write.png" className="size-16" alt="logo.png"></img>
        </div>
      </div>
    </>
  );
};

export default Navbar;
