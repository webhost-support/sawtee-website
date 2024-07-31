import { Box } from '@chakra-ui/react';
import React from 'react';
import Section from './section';

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBox = ({ showPattern = true, children, ...props }) => (
  <section
    className="relative border-t-4 border-theme-900 bg-theme-700"
    style={
      showPattern
        ? {
            backgroundSize: '1018px',
            backgroundImage: 'url(assets/pattern-tile-green.svg)',
            backgroundPosition: 'top center',
          }
        : {}
    }
    {...props}
  >{children}</section>
);

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBoxInner = ({props, children}) => (
  <Section
    className={'relative z-10 overflow-hidden px-6 py-20 text-center'}
    size="sm"
    {...props}
  >{children}</Section>
);

export const LightPatternBox = React.forwardRef(
  ({ showPattern = false, children, ...props }, ref) => (
    <div
      className="relative z-0 pt-10"
      ref={ref}
      pt="40px"
      pos="relative"
      {...props}
    >
      <div
        className="absolute inset-0 -z-[1] block h-full w-full bg-[url(assets/pattern-tile-green.svg)] opacity-40 dark:bg-[url(assets/pattern-tile-light-fade.svg)]"
        style={
          showPattern
            ? {
                backgroundSize: '1018px',
                backgroundPosition: 'top center',
                backgroundBlendMode: 'overlay',
              }
            : {}
        }
      />
      {children}
    </div>
  )
);
