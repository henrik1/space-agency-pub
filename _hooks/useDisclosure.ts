import { useState } from 'react';

export const useDisclosure = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => open && setOpen(false);
  const onToggle = () => setOpen( val => !val);

  return { open, onOpen, onClose, onToggle };
}

export default useDisclosure;
