import { Header, ProjectCard } from "@/components";
import myProjects from "@/components/ProjectsData";

export const Work = () => {
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Header
        description="Projects and ideas I’ve worked on."
        title="My Work"
      />
      <ul className="flex flex-col items-center gap-5 mt-10 py-5">
        {myProjects.All.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </ul>
    </section>
  );
};