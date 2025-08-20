export const animationConfig = {
  // Common easing function used throughout the app
  ease: [0.165, 0.84, 0.44, 1.0] as [number, number, number, number],
  
  // Standard animation variants
  variants: {
    fadeInUp: {
      initial: { opacity: 0, y: 25 },
      animate: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      initial: { opacity: 0, x: 25 },
      animate: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      initial: { opacity: 0, x: -25 },
      animate: { opacity: 1, x: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  },
  
  // Common delay patterns
  delays: {
    staggered: (index: number) => 0.1 + index * 0.1,
    quick: 0.1,
    medium: 0.2,
    slow: 0.3,
  },
} as const;