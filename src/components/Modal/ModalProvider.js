import { useEffect, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';

function ModalProvider({ status = 'idle', ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      setIsOpen(false);
    }
  }, [status]);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

export default ModalProvider;
