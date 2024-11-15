import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import ProjectDetailsCardSkelton from "@/components/ProjectDetailsCardSkelton";
import { getOneProject } from "@/lib/api";
import { Project } from "@/Types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project>(null!);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await getOneProject(id!);
      if (!data) throw Error;
      setProject(data);
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      {isLoading ? (
        <ProjectDetailsCardSkelton />
      ) : (
        <ProjectDetailsCard project={project} />
      )}
    </section>
  );
};
export default ProjectDetails;
