import { useContext, cloneElement } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { callAll } from '../../utils/utils';

function ModalCloseButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

export default ModalCloseButton;
