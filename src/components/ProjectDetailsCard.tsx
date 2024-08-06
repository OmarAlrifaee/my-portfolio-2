import { Project } from "@/Types";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

type Props = {
  project: Project;
};
const ProjectDetailsCard = ({ project }: Props) => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null!);
  return (
    <motion.div
      className="origin-top relative w-full bg-card-light dark:bg-card-dark p-5 rounded-xl border border-dark-text-muted dark:border-dark-text-muted"
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-[30px] capitalize mt-5 font-semibold dark:text-light-text text-dark-text font-Poetsen">
        {project?.title}
      </h3>
      <article className="w-full">
        <div className="flex flex-col gap-3 py-5">
          {project?.description.map((line) => (
            <p
              key={line}
              className="capitalize text-dark-text-muted dark:text-light-text font-semibold text-lg"
            >
              • {line}
            </p>
          ))}
        </div>
        <motion.div className="w-full rounded-md overflow-hidden" ref={imgRef}>
          <img
            src={project?.img[imgIndex]}
            alt={project?.title}
            className="w-full h-full object-fill"
            loading="lazy"
          />
        </motion.div>
        <ul className="my-5 flex items-center gap-5 flex-wrap">
          {project?.img?.map((img, index) => (
            <div
              className={`rounded-md overflow-hidden w-[100px] h-[100px] cursor-pointer ${
                index === imgIndex ? "border-2 border-primary" : ""
              }`}
              onClick={() => {
                imgRef.current.scrollIntoView({ behavior: "smooth" });
                setImgIndex(index);
              }}
            >
              <img
                src={img}
                alt={project?.title}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </ul>
        <Button
          variant={"secondary"}
          className="font-Poetsen block mt-3 mx-auto w-full"
        >
          <a href={project?.link} target="_blank" className="block w-full">
            Live
          </a>
        </Button>
        <Button
          variant={"secondary"}
          className="font-Poetsen block mt-3 mx-auto w-full"
        >
          <a
            href={project?.githubLink}
            target="_blank"
            className="block w-full"
          >
            Github
          </a>
        </Button>
      </article>
    </motion.div>
  );
};
export default ProjectDetailsCard;
