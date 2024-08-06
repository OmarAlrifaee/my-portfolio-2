import { Header, ProjectCard } from "@/components";
import ProjectsSketlon from "@/components/ProjectsSketlon";
import { getProjects } from "@/lib/api";
import { ProjectsData } from "@/Types";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const Work = () => {
  const [projects, setProjects] = useState<ProjectsData>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await getProjects();
      if (!data) throw Error;
      setProjects(data);
      setIsLoading(false);
    })();
  }, []);
  const Head = () => (
    <Helmet>
      <title>Work</title>
    </Helmet>
  );
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Head />
      <Header
        description="Projects and ideas I’ve worked on."
        title="My Work"
      />
      <ul className="flex flex-wrap gap-5 mt-10 lg:justify-normal justify-center">
        {isLoading ? (
          <>
            <ProjectsSketlon />
            <ProjectsSketlon />
            <ProjectsSketlon />
            <ProjectsSketlon />
            <ProjectsSketlon />
          </>
        ) : (
          projects.map((project) => (
            <ProjectCard project={project} key={project.link} />
          ))
        )}
      </ul>
    </section>
  );
};
