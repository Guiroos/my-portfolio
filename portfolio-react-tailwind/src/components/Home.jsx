import React from "react";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[920px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl">Hello everyone, I&apos;m</p>
        <h1 className="text-5xl sm:text-7xl text-white font-bold inline-flex border-b-4 border-purple-800 w-fit">Guilherme Roos</h1>
        <p className="text-5xl sm:text-7xl font-bold "> I&apos;m a Full Stack Developer</p>
        <p className="py-4 max-w-[700px] text-xl">
          I&apos;m a Full Stack Developer with a background in Mechanical Engineering.
          Focusing on learning new technologies and solving problems.
        </p>
      </div>
    </div>
  );
}
