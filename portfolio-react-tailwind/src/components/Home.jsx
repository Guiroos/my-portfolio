import React from "react";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[920px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="">Hello everyone, I&apos;m</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Guilherme Roos</h1>
        <p className="text-4xl sm:text-7xl font-bold "> I&apos;m a Full Stack Developer</p>
        <p className="py-4 max-w-[700px]">
          I&apos;m a Full Stack Developer with a background in Mechanical Engineering.
          Focusing on learning new technologies and solving problems.
        </p>
      </div>
    </div>
  );
}
