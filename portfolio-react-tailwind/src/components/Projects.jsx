import React from "react";
import Delivery from "../assets/projects/delivery-app.png";
import TaskManager from "../assets/projects/task-manager.png";

export default function Projects() {
  return (
    <div name="projects" className="text-white w-full md:h-screen">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-800">projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div
            style={{ backgroundImage: `url(${Delivery})` }}
            className="shadow-lg shadow-cyan-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider">Delivery App</span>
              <div className="pt-8 text-center">
                <a href="https://ross-app-delivery.netlify.app/">
                  <button type="button" className="text-center text-lg font-bold rounded-lg px-4 py-3 m-2 bg-white text-cyan-300">Page</button>
                </a>
                <a href="https://github.com/Guiroos/project-app-delivery">
                  <button type="button" className="text-center text-lg font-bold rounded-lg px-4 py-3 m-2 bg-white text-cyan-300">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${TaskManager})` }}
            className="shadow-lg shadow-cyan-200 group container rounded-md flex justify-center items-center mx-auto content-div"
          >

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider">Task Manager</span>
              <div className="pt-8 text-center">
                <a href="https://ross-task-manager.netlify.app/">
                  <button type="button" className="text-center text-lg font-bold rounded-lg px-4 py-3 m-2 bg-white text-cyan-300">Page</button>
                </a>
                <a href="https://github.com/Guiroos/ross-task-manager">
                  <button type="button" className="text-center text-lg font-bold rounded-lg px-4 py-3 m-2 bg-white text-cyan-300">Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
