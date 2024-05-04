import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiLogitechg } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import { ProjectCard } from "@/components";
import { motion, useAnimationControls } from "framer-motion";
import myProjects from "@/components/ProjectsData";

export const Home = () => {
  /* start layouts */
  const Hero = () => (
    <div className="flex md:justify-center md:gap-20 gap-5 md:mt-16 mt-3 py-10">
      <motion.article
        className="md:text-start text-center origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="md:text-[80px] text-[50px] text-dark-text dark:text-light-text font-extrabold font-Poetsen capitalize">
          i'am omar alrifai
        </h1>
        <p className="text-dark-text-muted dark:text-light-text-muted text-xl md:w-[75%] mt-3">
          A Front End Developer. Proficient in JavaScript, TypeScript, React.js,
          Redux and more, I strive to create remarkable digital experiences.
        </p>
        <div className="flex items-center md:justify-normal justify-center gap-5 md:mt-8 mt-5">
          <Button variant={"destructive"} size={"lg"} className="font-bold">
            <a href="/assets/cv.pdf" download={true}>
              Download Cv
            </a>
          </Button>
          <Button size={"lg"} variant={"secondary"} className="font-bold">
            <Link to={"/contact"}>get in touch</Link>
          </Button>
        </div>
      </motion.article>
      <motion.div
        className="lg:block hidden w-1/2 h-[500px] overflow-hidden rounded-lg origin-right"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/assets/avatar.png"
          alt="me"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  );
  const Projects = () => (
    <div className="md:mt-12 mt-6 py-10">
      <h2 className="md:text-[50px] text-[30px] md:text-start text-center font-Poetsen font-extrabold dark:text-light-text text-dark-text capitalize">
        Best Projects
      </h2>
      <ul className="flex flex-col items-center gap-5">
        {myProjects.Best.map((project) => (
          <ProjectCard project={project} key={project.link} />
        ))}
      </ul>
    </div>
  );
  const GetToKnow = () => (
    <div className="mt-12 py-10">
      <h2 className="md:text-[50px] text-[30px] md:text-start text-center font-Poetsen font-extrabold dark:text-light-text text-dark-text capitalize">
        Get To Know Me
      </h2>
      <div className="mt-5 flex justify-center gap-5 flex-wrap">
        <motion.div
          className="flex-grow origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={"/about"}
            className="bg-card-light dark:bg-card-dark rounded-lg py-12 md:px-10 px-5 block min-w-[350px]"
          >
            <h3 className="font-semibold dark:text-light-text text-dark-text capitalize text-3xl font-Poetsen">
              About Me
            </h3>
            <p className="dark:text-light-text-muted text-dark-text-muted font-semibold mt-2">
              who i'am and what i do
            </p>
            <div className="mx-auto mt-10 flex justify-center w-[175px] h-[175px]">
              <img
                src="/assets/avatar.png"
                alt="avatar"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex-grow origin-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/omar-alrifai-748b752b0/"
            target="_blank"
            className="bg-card-light dark:bg-card-dark rounded-lg py-12 md:px-10 px-5 block min-w-[350px]"
          >
            <h3 className="font-semibold dark:text-light-text text-dark-text capitalize text-3xl font-Poetsen">
              Linked In
            </h3>
            <p className="dark:text-light-text-muted text-dark-text-muted font-semibold mt-2">
              View My Linked In Profile
            </p>
            <div className="mx-auto mt-10 flex justify-center text-primary w-[175px] h-[175px]">
              <FaLinkedin
                size={200}
                className="w-full h-full object-cover rounded-md block"
              />
            </div>
          </a>
        </motion.div>
        <motion.div
          className="flex-grow origin-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={"/contact"}
            className="bg-card-light dark:bg-card-dark rounded-lg py-12 md:px-10 px-5 block min-w-[350px]"
          >
            <h3 className="font-semibold dark:text-light-text text-dark-text capitalize text-3xl font-Poetsen">
              Contact
            </h3>
            <p className="dark:text-light-text-muted text-dark-text-muted font-semibold mt-2">
              Let’s Build something great.
            </p>
            <div className="mx-auto mt-10 flex justify-center dark:text-light-text text-dark-text w-[175px] h-[175px]">
              <MdContactMail
                size={200}
                className="w-full h-full object-cover rounded-md block"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex-grow origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={"/tech-stack"}
            className="bg-card-light dark:bg-card-dark rounded-lg py-12 md:px-10 px-5 block min-w-[350px]"
          >
            <h3 className="font-semibold dark:text-light-text text-dark-text capitalize text-3xl font-Poetsen">
              Tech Stack
            </h3>
            <p className="dark:text-light-text-muted text-dark-text-muted font-semibold mt-2">
              The dev tools and technologies I work with
            </p>
            <div className="mx-auto mt-10 flex justify-center text-primary w-[175px] h-[175px]">
              <SiLogitechg
                size={200}
                className="w-full h-full object-cover rounded-md block"
              />
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="flex-grow origin-right"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/OmarAlrifaee/"
            target="_blank"
            className="bg-card-light dark:bg-card-dark rounded-lg py-12 md:px-10 px-5 block  min-w-[350px]"
          >
            <h3 className="font-semibold dark:text-light-text text-dark-text capitalize text-3xl font-Poetsen">
              Github
            </h3>
            <p className="dark:text-light-text-muted text-dark-text-muted font-semibold mt-2">
              Visit My Projects Container
            </p>
            <div className="mx-auto mt-10 flex justify-center dark:text-orange-500 text-dark-text w-[175px] h-[175px]">
              <FaSquareGithub
                size={200}
                className="w-full h-full object-cover rounded-md block"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
  const LetsWork = () => {
    const controls = useAnimationControls();
    return (
      <div className="flex md:flex-row flex-col items-center md:justify-between w-full mt-12 py-10 md:gap-0 gap-5">
        <article>
          <h2 className="md:text-[50px] text-[30px] md:text-start text-center font-Poetsen font-extrabold dark:text-light-text text-dark-text capitalize">
            Let's Word Toghether
          </h2>
          <p className="capitalize font-bold text-dark-text-muted dark:text-light-text-muted text-[16px] leading-[1.8] mt-6 md:text-start text-center">
            Want to discuss an opportunity to create something great?{" "}
            <br className="md:block hidden" /> I’m ready when you are.
          </p>
        </article>
        <motion.div
          onMouseOver={() => controls.start({ translateX: "5px" })}
          onMouseOut={() => controls.start({ translateX: 0 })}
        >
          <Button size={"lg"} className="font-semibold px-0">
            <Link
              to={"/contact"}
              className="w-full h-full flex justify-center items-center px-5 py-1"
            >
              Contact Me
              <motion.span animate={controls}>
                <MdArrowRightAlt size={50} />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  };
  /* End layouts */
  return (
    <section className="md:px-32 px-6 py-10 bg-main-bg-light dark:bg-main-bg-dark min-h-screen">
      <Hero />
      <Projects />
      <GetToKnow />
      <LetsWork />
    </section>
  );
};
