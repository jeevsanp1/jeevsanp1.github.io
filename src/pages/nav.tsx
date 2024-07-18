import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "../index.css";

function Nav() {
  return (
    <>
      <div className=" bg-slate-200 h-12 font-display">
        <ul className="flex flex-row pt-3">
          <li className="px-4">
            <a href="#">Sanjeev</a>
          </li>
          <li className="px-4">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
