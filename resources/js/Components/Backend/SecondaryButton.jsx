import { Button } from '@chakra-ui/react';

export default function SecondaryButton({
  type = 'button',
  className = '',
  disabled,
  children,
  ...rest
}) {
  return (
    <Button
      className={className}
      colorScheme="gray"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
}
