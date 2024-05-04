import { motion, useAnimationControls } from "framer-motion";
export const TechBox = ({
  imageUrl,
  text,
}: {
  imageUrl: string;
  text: string;
}) => {
  const controls = useAnimationControls();
  return (
    <motion.div
      className="bg-card-light dark:bg-card-dark border dark:border-light-text-muted border-dark-text-muted 
    relative rounded-[20px] h-[300px] w-[300px] flex-grow origin-top
    "
      onMouseOver={() => controls.start({ scale: 1.3 })}
      onMouseOut={() => controls.start({ scale: 1 })}
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125px] h-[125px]">
        <motion.img
          src={imageUrl}
          alt={text}
          className="w-full h-full object-cover"
          animate={controls}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 dark:text-light-text text-dark-text font-bold font-Poetsen capitalize text-lg">
        {text}
      </p>
    </motion.div>
  );
};
