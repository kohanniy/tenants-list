import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Header = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(1),
}));
