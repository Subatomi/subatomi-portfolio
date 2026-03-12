
type ProjectLinksProps = {
  link?: string;
  repoLink?: string | string[];
};

const PrivateLabelFrontend = () => (
  <div className="flex-shrink-0 text-sm font-bold  bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md text-white/40">
    Front-End Privated
  </div>
);

const PrivateLabelBackend = () => (
  <div className="flex-shrink-0 text-sm font-bold  bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md  text-white/40">
    
    Back-End Privated
  </div>
);

export default function LinkDisplay({ link, repoLink }: ProjectLinksProps) {
  const renderRepoLinks = () => {
    if (repoLink === "Privated") {
      return <PrivateLabelFrontend />;
    }

    if (
      !repoLink ||
      (Array.isArray(repoLink) && repoLink.length === 0) ||
      (typeof repoLink === "string" && repoLink.trim() === "")
    ) {
      return null;
    }

    if (Array.isArray(repoLink)) {
      return (
        <div className="flex flex-col lg:flex-row gap-2 items-end">
          {repoLink[0] &&
            (String(repoLink[0]).trim() === "Privated" ? (
              <PrivateLabelFrontend />
            ) : (
              
              <div className="flex-shrink-0 flex items-center gap-2 bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-white/80 text-white">
                <img src="/assets/icons/github.svg" alt="globe" className="w-4 h-4" />
                <a
                  href={repoLink[0]}
                  className="text-sm font-bold  text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Front-End Repo
                </a>
              </div>
            ))}

          {repoLink[1] &&
            (String(repoLink[1]).trim() === "Privated" ? (
              <PrivateLabelBackend />
            ) : (
              <div className="flex-shrink-0 flex items-center gap-2 bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-white/80 text-white">
                <img src="/assets/icons/github.svg" alt="globe" className="w-4 h-4" />
                <a
                  href={repoLink[1]}
                  className="text-sm font-bold  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Back-End Repo
                </a>
              </div>

            ))}
        </div>
      );
    }

    return (
      <a
        href={repoLink as string}
        className="text-sm font-bold  bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-white/80 text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo
      </a>
    );
  };

  return (
    <div className="flex flex-col gap-2 items-end w-full"> 
      {link && (
        <div className="flex justify-center items-center  bg-white/5 shadow-lg px-2 py-1 rounded-md  border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-white/80 gap-2 text-white">
            <img src="/assets/icons/globe.svg" alt="globe" className="w-4 h-4" />

            <a
            href={link}
            className="text-sm font-bold  text-white"
            target="_blank"
            rel="noopener noreferrer"
            >
            Live Demo
            </a>

        </div>
      )}
      {renderRepoLinks()}
    </div>
  );
}
