import { Header, TechBox } from "@/components";
import skillsData from "@/components/skillsData";
export const TechStack = () => {
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Header
        title={"Tech Stack"}
        description={"The tools and technologies I use"}
      />
      <ul className="flex justify-center flex-wrap gap-5 mt-10 py-5">
        {skillsData.map(({ text, url }) => (
          <TechBox key={text} text={text} imageUrl={url} />
        ))}
      </ul>
    </section>
  );
};