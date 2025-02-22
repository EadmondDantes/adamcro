export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = (delay = 0.1) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    staggerChildren: delay
  }
});