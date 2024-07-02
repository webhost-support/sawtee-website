import { Button } from '@chakra-ui/react';

export default function PrimaryButton({
  className = '',
  disabled,
  children,
  ...rest
}) {
  return (
    <Button
      className={className}
      colorScheme="blue"
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
}
