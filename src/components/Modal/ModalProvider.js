import { useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

function ModalProvider(props) {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

export default ModalProvider;