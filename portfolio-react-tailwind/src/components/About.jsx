import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[900px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-800">about</p>
          </div>
          <div />
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Nice to meet you!
              <br />
              Hope you find everything you were looking for.
            </p>
          </div>
          <div>
            <p className="text-xl">
              Mechanical Engineer going through a career transition process with studies in Full Stack Web Development.
              <br />
              I have been a technology enthusiast since I was a kid, and when I had contact with the programming area again, that flame rekindled and the desire to consume all kinds of languages returned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
