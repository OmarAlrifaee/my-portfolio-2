import { Skeleton } from "./ui/skeleton";

const ProjectDetailsCardSkelton = () => {
  return (
    <div className="flex flex-col space-y-3 w-full h-[800px]">
      <Skeleton className="h-[400px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-8 w-[65%]" />
      </div>
    </div>
  );
};
export default ProjectDetailsCardSkelton;
