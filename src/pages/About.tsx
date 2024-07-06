import { Header } from "@/components";
import { Button } from "@/components/ui/button";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
export const About = () => {
  // head
  const Head = () => (
    <Helmet>
      <title>About</title>
    </Helmet>
  );
  /* layouts */
  const Info = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <motion.article
      className="mt-10 md:max-w-[80%] max-w-full md:mx-0 mx-auto md:text-start text-center origin-top"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.6, ease: "backInOut" }}
    >
      <h3 className="text-xl text-dark-text dark:text-light-text font-bold font-Poetsen capitalize">
        {title}
      </h3>
      <p className="leading-[2] mt-5 text-sm text-dark-text-muted dark:text-light-text-muted font-semibold capitalize">
        {description}
      </p>
    </motion.article>
  );
  /* layouts */
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Head />
      <Header
        title={"A little bit about me"}
        description={"Who I am and what I do."}
      />
      <Info
        title="who i am"
        description="i am a frontend web developer, start studing programming in 9/9 2023 beside my college as a HR and i liked the web development carreer so i start studing hardlly and building projects and templates as well as api's projects and auth, i am allways Aspire to be better than myself Compared to yesterday"
      />
      <Info
        title="what i do?"
        description="In the realm of front-end web development, I excel in HTML, CSS, JavaScript, and TypeScript, creating seamless and visually stunning interfaces. Leveraging frameworks like React and Redux, I build dynamic applications with smooth state management and captivating animations. Proficient in CSS preprocessors like Sass and utility-first frameworks like Tailwind CSS, I ensure consistency and elegance in design. With a knack for integrating API data and adopting version control with Git, I streamline development processes for collaborative success. Currently expanding into Next.js, I'm committed to crafting faster, SEO-friendly web experiences. Passionate about innovation and driven by excellence, I deliver high-quality solutions that exceed expectations and elevate user engagement."
      />
      <Info
        title="what i did"
        description="talk less and show me the code, you can see all my work in the work section"
      />
      <Button
        variant={"link"}
        className="md:mx-0 mx-auto flex justify-center gap-2 px-0 underline"
      >
        <Link to={"/work"}>show</Link> <MdArrowRightAlt size={20} />
      </Button>
    </section>
  );
};
