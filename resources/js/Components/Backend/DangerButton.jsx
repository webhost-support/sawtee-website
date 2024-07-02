import { Button } from '@chakra-ui/react';

export default function DangerButton({
  className = '',
  disabled,
  children,
  ...rest
}) {
  return (
    <Button
      className={className}
      colorScheme="red"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
}
