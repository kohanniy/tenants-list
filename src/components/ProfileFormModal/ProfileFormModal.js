import { IconButton, Typography } from '@mui/material';
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
import { useSelector } from 'react-redux';
import { selectTenants } from '../../app/slices/tenantsSlice';

function ProfileFormModal({
  title,
  submitButtonText,
  onSubmit,
  openButton,
  defaultValues,
  isFormChanged = true,
}) {
  const { status: tenantsStatus } = useSelector(selectTenants);

  return (
    <ModalProvider status={tenantsStatus}>
      <ModalOpenButton>{openButton}</ModalOpenButton>
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
        {!isFormChanged && <Typography sx={{ color: 'error.main' }}>Профиль не изменен</Typography>}
        <Form
          submitButtonText={submitButtonText}
          onSubmit={onSubmit}
          isLoading={tenantsStatus === 'loading'}
          defaultValues={defaultValues}
        >
          {profileInputData.map((input) => (
            <InputGroup key={input.name} {...input} />
          ))}
        </Form>
      </Modal>
    </ModalProvider>
  );
}

export default ProfileFormModal;
