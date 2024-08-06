import { Skeleton } from "./ui/skeleton";

const ProjectsSketlon = () => {
  return (
    <div className="flex flex-col space-y-3 md:w-[400px] w-full h-[400px]">
      <Skeleton className="h-[250px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-8 w-[65%]" />
      </div>
    </div>
  );
};
export default ProjectsSketlon;
