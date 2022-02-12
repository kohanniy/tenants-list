import { useContext, cloneElement } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { callAll } from '../../utils/utils';

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext);

  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

export default ModalOpenButton;
