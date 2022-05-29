import React from "react";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[920px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-xl">Hello everyone, I&apos;m</p>
        <h1 className="text-5xl sm:text-7xl text-white font-bold underline underline-offset-4 decoration-purple-800 decoration-4">Guilherme Roos</h1>
        <p className="text-5xl sm:text-7xl font-bold ">A Full Stack Developer</p>
        <p className="py-4 max-w-[700px] text-xl">
          I&apos;m a Full Stack Developer with a degree in Mechanical Engineering.
          <br />
          Focusing on learning new technologies and solving problems.
        </p>
      </div>
    </div>
  );
}
