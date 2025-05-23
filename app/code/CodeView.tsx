import { useState } from "react";
import LaptopModel from "../components/LaptopModel";
import projects from "./projects.json";
import { Project } from "./types";

export default function CodeView() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div
      className="min-h-screen px-8 py-12 transition-colors duration-500"
      style={{ backgroundColor: "#0c7aa4" }}
    >
      {/* Floating projects row */}
      <div className="mb-4 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="h-[150px] w-[200px] cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <p className="p-2 text-center">{project.name}</p>
            <LaptopModel imageSrc={project.projectImage} />
          </div>
        ))}
      </div>

      <div className="container mx-auto" style={{ color: "#ffffff" }}>
        {/* Title and Description */}
        <div className="mb-10 text-center">
          <h1 className="font-serif text-[80px]">{selectedProject.name}</h1>
          <p className="mx-auto max-w-3xl text-2xl">
            {selectedProject.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex justify-around gap-16">
          {/* Stack */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="mb-4 text-4xl font-bold">STACK</h2>
            <ul className="space-y-4 text-xl">
              {selectedProject.stack.map((stack) => (
                <li key={stack}>{stack}</li>
              ))}
            </ul>
          </div>

          {/* Project Preview */}
          <div className="h-[460px] w-[800px]">
            <iframe
              src={selectedProject.projectLink}
              className="h-full w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
