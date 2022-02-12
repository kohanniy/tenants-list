import { Button, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ModalOpenButton from '../Modal/ModalOpenButton';
import ModalProvider from '../Modal/ModalProvider';
import Modal from '../Modal/Modal';
import ModalCloseButton from '../Modal/ModalCloseButton';
import { content } from '../../utils/content';
import { selectTenants } from '../../app/slices/tenantsSlice';

function ConfirmModal({ openButton, onConfirmButtonClick }) {
  const { status: tenantsStatus } = useSelector(selectTenants);

  return (
    <ModalProvider status={tenantsStatus}>
      <ModalOpenButton>{openButton}</ModalOpenButton>
      <Modal>
        <Typography paragraph align='center' variant='h5'>
          {content.areYouSure}
        </Typography>
        <Stack direction='row' justifyContent='center' spacing={3}>
          <ModalCloseButton>
            <Button variant='contained' size='small' onClick={onConfirmButtonClick}>
              {content.delete}
            </Button>
          </ModalCloseButton>
          <ModalCloseButton>
            <Button variant='outlined' size='small'>
              {content.cancel}
            </Button>
          </ModalCloseButton>
        </Stack>
      </Modal>
    </ModalProvider>
  );
}

export default ConfirmModal;
