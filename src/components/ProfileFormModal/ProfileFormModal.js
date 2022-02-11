import { IconButton, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import Form from '../Form/Form';
import { content } from '../../utils/content';
import InputGroup from '../InputGroup/InputGroup';
import ModalProvider from '../Modal/ModalProvider';
import ModalOpenButton from '../Modal/ModalOpenButton';
import ModalCloseButton from '../Modal/ModalCloseButton';
import Modal from '../Modal/Modal';
import { Header } from './Styles';
import { profileInputData } from '../../utils/constants';

function ProfileFormModal({ title, submitButtonText, status, onSubmit }) {
  return (
    <ModalProvider status={status}>
      <ModalOpenButton>
        <IconButton sx={{ ml: 'auto' }} color='primary' aria-label={title}>
          <PersonAddIcon />
        </IconButton>
      </ModalOpenButton>
      <Modal>
        <Header direction='row' spacing={1.5}>
          <Typography component='h3' variant='h6'>
            {title}
          </Typography>
          <ModalCloseButton>
            <IconButton aria-label={content.close}>
              <CloseIcon />
            </IconButton>
          </ModalCloseButton>
        </Header>
        <Form submitButtonText={submitButtonText} onSubmit={onSubmit} isLoading={status === 'loading'}>
          {profileInputData.map((input) => (
            <InputGroup key={input.name} {...input} />
          ))}
        </Form>
      </Modal>
    </ModalProvider>
  );
}

export default ProfileFormModal;
