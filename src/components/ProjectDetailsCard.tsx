import { Project } from "@/Types";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";
import Popup from "./Popup";

type Props = {
  project: Project;
};
const ProjectDetailsCard = ({ project }: Props) => {
  const [openPopup, setOpenPopup] = useState(false);
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
        {openPopup ? (
          <Popup imgs={project?.img} setOpenPopup={setOpenPopup} />
        ) : (
          ""
        )}
        <Button
          variant={"secondary"}
          className="font-Poetsen block mt-3 mx-auto w-full"
          onClick={() => setOpenPopup(true)}
        >
          Show Images
        </Button>
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
