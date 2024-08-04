import { Header, TechBox } from "@/components";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { SkillsData } from "@/Types";
import { getSkills } from "@/lib/api";
export const TechStack = () => {
  const [skills, setSkills] = useState<SkillsData>([]);
  useEffect(() => {
    (async () => {
      const data = await getSkills();
      setSkills(data!);
    })();
  }, []);
  const Head = () => (
    <Helmet>
      <title>Tech Stack</title>
    </Helmet>
  );
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Head />
      <Header
        title={"Tech Stack"}
        description={"The tools and technologies I use"}
      />
      <ul className="flex justify-center flex-wrap gap-5 mt-10 py-5">
        {skills.map(({ title, img }) => (
          <TechBox key={title} title={title} img={img} />
        ))}
      </ul>
    </section>
  );
};
