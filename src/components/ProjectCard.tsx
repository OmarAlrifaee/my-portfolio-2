import { MdArrowRightAlt } from "react-icons/md";
import { Button } from "./ui/button";
import { Project } from "@/Types";
import { motion, useAnimationControls } from "framer-motion";
export const ProjectCard = ({
  project: { description, imageUrl, link, title },
}: {
  project: Project;
}) => {
  // animation
  const controls = useAnimationControls();
  return (
    <motion.div
      className="origin-top relative w-full flex items-center md:justify-between gap-12 md:flex-row flex-col-reverse bg-card-light dark:bg-card-dark py-12 md:px-10 px-5 rounded-xl border border-dark-text-muted dark:border-dark-text-muted mt-5"
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onMouseOver={() => controls.start({ rotate: "2deg" })}
      onMouseOut={() => controls.start({ rotate: 0 })}
    >
      <article className="md:w-1/2 w-full">
        <h3 className="text-[30px] capitalize md:text-start text-center font-semibold dark:text-light-text text-dark-text font-Poetsen">
          {title}
        </h3>
        {Array.isArray(description) ? (
          <div className="flex flex-col gap-1 py-5">
            {description.map((line) => (
              <p
                key={line}
                className="capitalize text-dark-text-muted dark:text-light-text-muted text-[16px] md:text-start text-center"
              >
                -{line}
              </p>
            ))}
          </div>
        ) : (
          <p className="capitalize text-dark-text-muted dark:text-light-text-muted text-[16px] leading-[1.8] mt-6 md:text-start text-center">
            {description}
          </p>
        )}
        <Button
          variant={"link"}
          className="md:mx-0 mx-auto mt-5 px-0 flex items-center gap-3 justify-center md:absolute md:left-10 md:bottom-5 font-Poetsen"
        >
          <a href={link} target="_blank">
            Visit Site
          </a>
          <MdArrowRightAlt size={30} />
        </Button>
      </article>
      <motion.div
        className="md:w-1/2 w-full md:h-[300px] rounded-md overflow-hidden"
        animate={controls}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-fill"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};
