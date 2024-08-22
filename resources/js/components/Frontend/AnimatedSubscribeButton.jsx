'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '../ui/button';

// interface AnimatedSubscribeButtonProps {
//   buttonColor: string;
//   buttonTextColor?: string;
//   subscribeStatus: boolean;
//   initialText: React.ReactElement | string;
//   changeText: React.ReactElement | string;
// }

export const AnimatedSubscribeButton = ({
  isSubscribed,
  isLoading,
  className,
}) => {
  return (
    <AnimatePresence mode="sync">
      {isSubscribed ? (
        <motion.div
          className={cn(
            'relative flex w-[200px] items-center justify-center overflow-hidden',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button className="w-full">
            <motion.span
              key="action"
              className="relative inline-flex h-full w-full items-center font-semibold"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              Subscribed
              <CheckIcon className="mr-2 h-4 w-4" />
            </motion.span>
          </Button>
        </motion.div>
      ) : (
        <motion.div
          className={cn(
            'relative flex w-[200px] cursor-pointer items-center justify-center rounded-md',
            className
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Button className="w-full">
            <motion.span
              key="reaction"
              className="relative inline-flex items-center font-semibold"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              {isLoading ? 'Sending request...' : 'Subscribe'}

              {isLoading && (
                <svg
                  className="mr-3 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <title>Spinner</title>
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {!isLoading && (
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </motion.span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
