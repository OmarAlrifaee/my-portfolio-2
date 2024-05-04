import { motion } from "framer-motion";
type HeaderProps = {
  title: string;
  description: string;
};
export const Header = ({ description, title }: HeaderProps) => {
  return (
    <motion.header
      className="border-b border-b-dark-text-muted dark:border-b-light-text-muted pb-10 origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="md:text-start text-center md:text-[80px] text-[40px] text-dark-text dark:text-light-text font-extrabold font-Poetsen capitalize">
        {title}
      </h2>
      <p className="md:text-start text-center text-dark-text-muted dark:text-light-text-muted text-xl mt-3">
        {description}
      </p>
    </motion.header>
  );
};
