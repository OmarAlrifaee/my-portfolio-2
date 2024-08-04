import { Header, ProjectCard } from "@/components";
import { getProjects } from "@/lib/api";
import { ProjectsData } from "@/Types";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export const Work = () => {
  const [projects, setProjects] = useState<ProjectsData>([]);
  useEffect(() => {
    (async () => {
      const data = await getProjects();
      if (!data) throw Error;
      setProjects(data);
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
      <ul className="flex flex-col items-center gap-5 mt-10 py-5">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </ul>
    </section>
  );
};
