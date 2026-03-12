import { config } from "../../config"
import NavBar from "../Home/sections/NavBar"
import ImageGrid from "../Home/sections/components/ImageGrid"
import LinkDisplay from "../Home/sections/components/LinkDisplay"

export default function MyWork() {
  return (
    <div className="flex flex-col w-full min-h-screen scroll-smooth">
      <NavBar />
      <div className="mt-16 px-5 py-10 w-full">
        <div className="w-full text-center h-full mb-8 pb-2 border-b-2 border-gray-600">
          <h1 className="text-8xl font-bold">My Works</h1>
          <h4>Showing {config.projects.length} projects</h4>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {config.projects.map((project, index) => (
            <div
              key={project.id || index}
              className="panel max-w-2xl w-full h-[650px] shrink-0 flex flex-col px-5 py-6"
            >
              <div className="flex justify-between w-full mb-5 items-start">
                <h3 className="text-4xl font-bold">{`0${index + 1}`}</h3>
                <div className="text-right">
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <p className="text-sm text-white/60 font-extralight">{project.category}</p>
                </div>
              </div>
              
              <div className="h-64 shrink-0">
                <ImageGrid project={project} isHome={false} />
              </div>

              <div className="mt-5 flex-1 flex flex-col overflow-hidden">
                <p className="text-sm text-white font-bold shrink-0">Technology Used:</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 justify-start mb-3 shrink-0">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-left text-white/70 line-clamp-3 overflow-hidden">{project.description}</p>
              </div>

              <div className="flex justify-end gap-5 mt-5 w-full shrink-0">
                  <LinkDisplay link={project.link} repoLink={project.repoLink} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
