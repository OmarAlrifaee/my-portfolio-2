import { Skeleton } from "./ui/skeleton";

const SkillsSketlon = () => {
  return (
    <div className="flex flex-col space-y-3 mt-5 w-[300px] h-[300px]">
      <Skeleton className="h-[150px]  rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-[65%]" />
      </div>
    </div>
  );
};
export default SkillsSketlon;
