import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export function TableEditAction(props) {
  return (
    <IconButton {...props} colorScheme={'blue'} icon={<EditIcon />} size="xs" />
  );
}

export function TableDeleteAction(props) {
  return (
    <IconButton
      {...props}
      colorScheme={'red'}
      icon={<DeleteIcon />}
      size="xs"
    />
  );
}
