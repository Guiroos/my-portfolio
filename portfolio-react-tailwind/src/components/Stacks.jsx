import React from "react";
import HTML from "../assets/stacks/html.png";
import CSS from "../assets/stacks/css.png";
import JS from "../assets/stacks/js.png";
import REACT from "../assets/stacks/react.png";
import NODE from "../assets/stacks/node.png";
import GITHUB from "../assets/stacks/github.png";

export default function Stacks() {
  return (
    <div name="stacks" className="text-white w-full h-screen">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-800">stacks</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="pt-4">HTML</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="pt-4">CSS</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={JS} alt="HTML icon" />
            <p className="pt-4">JAVASCRIPT</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={REACT} alt="HTML icon" />
            <p className="pt-4">REACT</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={NODE} alt="HTML icon" />
            <p className="pt-4">NODE</p>
          </div>
          <div className="rounded-lg shadow-lg shadow-cyan-200 hover:scale-110 duration-500 p-4 bg-purple-800">
            <img className="w-20 mx-auto" src={GITHUB} alt="HTML icon" />
            <p className="pt-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
