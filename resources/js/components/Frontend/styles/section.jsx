import { cn } from '@/lib/utils';
import { Box } from '@chakra-ui/react';

const sizes = {
  xs: '640px',
  sm: '700px',
  md: '750px',
  lg: '1150px',
  huge: '1550px',
  max: '2560px',
  full: '100%',
};

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
const Section = ({ size = 'lg', className, children }) => (
  <section
    className={cn(
      'mx-auto max-w-5xl',
      size && `max-w-[${sizes[size]}]`,
      className
    )}
  >
    {children}
  </section>
);
export default Section;
