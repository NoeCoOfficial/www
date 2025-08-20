import { animationConfig } from "@/lib/config/animations";

export function useAnimationConfig() {
  return {
    ease: animationConfig.ease,
    fadeInUp: (delay: number = 0) => ({
      ...animationConfig.variants.fadeInUp,
      transition: { ease: animationConfig.ease, delay },
    }),
    fadeInDown: (delay: number = 0) => ({
      ...animationConfig.variants.fadeInDown,
      transition: { ease: animationConfig.ease, delay },
    }),
    fadeInLeft: (delay: number = 0) => ({
      ...animationConfig.variants.fadeInLeft,
      transition: { ease: animationConfig.ease, delay },
    }),
    fadeInRight: (delay: number = 0) => ({
      ...animationConfig.variants.fadeInRight,
      transition: { ease: animationConfig.ease, delay },
    }),
    fadeIn: (delay: number = 0) => ({
      ...animationConfig.variants.fadeIn,
      transition: { ease: animationConfig.ease, delay },
    }),
    staggerDelay: animationConfig.delays.staggered,
  };
}