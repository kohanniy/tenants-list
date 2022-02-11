import { useContext } from 'react';
import { Fade } from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';
import { ModalStyled, PaperStyled } from './Styles';

function Modal({ children, ...props }) {
  const [isOpen, setIsOpen] = useContext(ModalContext);

  const closeModal = () => setIsOpen(false);

  return (
    <ModalStyled closeAfterTransition open={isOpen} onClose={closeModal} {...props}>
      <Fade in={isOpen}>
        <PaperStyled>{children}</PaperStyled>
      </Fade>
    </ModalStyled>
  );
}

export default Modal;
