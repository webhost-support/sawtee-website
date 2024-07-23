import { cn } from '@/lib/utils';
// Here we have used framer-motion package for animations
import { isValidMotionProp, motion } from 'framer-motion';
import { forwardRef } from 'react';

export const MotionBox = motion(
  forwardRef((className, ref, ...rest) => {
    const motionProps = Object.fromEntries(
      Object.entries(rest).filter(([key]) => !isValidMotionProp(key))
    );
    return <div ref={ref} {...motionProps} className={cn(className)} />;
  })
);
