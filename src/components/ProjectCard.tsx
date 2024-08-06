import { Button } from "./ui/button";
import { Project } from "@/Types";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";
export const ProjectCard = ({
  project: { img, link, title, $id, githubLink },
}: {
  project: Project;
}) => {
  // animation
  const controls = useAnimationControls();
  return (
    <motion.div
      className="origin-top relative md:w-[400px] w-full h-[400px]  bg-card-light dark:bg-card-dark p-5 rounded-xl border border-dark-text-muted dark:border-dark-text-muted"
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onMouseOver={() => controls.start({ rotate: "2deg" })}
      onMouseOut={() => controls.start({ rotate: 0 })}
    >
      <motion.div
        className="w-full h-[200px] rounded-md overflow-hidden"
        animate={controls}
      >
        <img
          src={img[0]}
          alt={title}
          className="w-full h-full object-fill"
          loading="lazy"
        />
      </motion.div>
      <h3 className="text-[30px] capitalize text-center mt-5 font-semibold dark:text-light-text text-dark-text font-Poetsen">
        {title}
      </h3>
      <article className="md:w-1/2 w-full">
        <div className="flex items-center gap-5 w-full justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
          <Button variant={"secondary"} className="font-Poetsen">
            <a href={link} target="_blank" className="block w-full">
              Live
            </a>
          </Button>
          <Button variant={"secondary"} className="font-Poetsen">
            <a href={githubLink} target="_blank" className="block w-full">
              Github
            </a>
          </Button>
          <Button variant={"secondary"} className="font-Poetsen">
            <Link to={`/work/${$id}`}>Show Details</Link>
          </Button>
        </div>
      </article>
    </motion.div>
  );
};
