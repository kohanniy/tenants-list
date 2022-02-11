import { Modal, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalStyled = styled(Modal)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  width: '70%',
  maxWidth: 600,
  padding: '24px',

  [theme.breakpoints.down('md')]: {
    width: '90%',
    padding: '15px',
  },
}));