export const VARIANTS = {
  OPEN: "open",
  CLOSED: "closed",
};

export const sideNavAnim = {
  variants: {
    [VARIANTS.OPEN]: {
      width: "100%",
      transition: { duration: 0.4, type: "spring" },
    },
    [VARIANTS.CLOSED]: {
      width: 0,
      transition: { delay: 0.5, duration: 0.2, type: "tween" },
    },
  },
};

export const staggerOptions = {
  variants: {
    [VARIANTS.OPEN]: {
      transition: { staggerChildren: 1, delayChildren: 0.2 },
    },
    [VARIANTS.CLOSED]: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
};

export const easeInBottomAnim = {
  variants: {
    [VARIANTS.OPEN]: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    [VARIANTS.CLOSED]: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
};
