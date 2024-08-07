import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export default function LetterPullUp({ words = 'SAWTEE CMS', className = '' }) {
  const letters = React.useMemo(() => words.split(''), [words]);

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <h1 className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={Math.random()}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          custom={i}
          className={cn(
            'font-display text-center text-xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]',
            className
          )}
        >
          {letter === ' ' ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </h1>
  );
}
