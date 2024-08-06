import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import { getOneProject } from "@/lib/api";
import { Project } from "@/Types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project>(null!);
  useEffect(() => {
    (async () => {
      const data = await getOneProject(id!);
      if (!data) throw Error;
      setProject(data);
    })();
  }, [id]);
  console.log(project);

  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <ProjectDetailsCard project={project} />
    </section>
  );
};
export default ProjectDetails;
