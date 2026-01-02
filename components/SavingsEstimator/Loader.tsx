import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

const Loader = () => {
  const classNames = { circle: "h-5 w-5 rounded-full bg-muted-foreground" };
  const circleInitial = { y: "50%" };
  const circleAnimate = { y: ["50%", "150%"] };

  return (
    <motion.div
      className="w-24 h-26 flex justify-between"
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        className={classNames.circle}
        initial={circleInitial}
        animate={circleAnimate}
        transition={loadingCircleTransition}
      />
      <motion.span
        className={classNames.circle}
        initial={circleInitial}
        animate={circleAnimate}
        transition={{ ...loadingCircleTransition, delay: 0.2 }}
      />
      <motion.span
        className={classNames.circle}
        initial={circleInitial}
        animate={circleAnimate}
        transition={{ ...loadingCircleTransition, delay: 0.4 }}
      />
    </motion.div>
  );
};

export default Loader;
