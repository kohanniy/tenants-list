import { Typography, IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { WrapperStyled } from './Styles';

function TenantsHeader() {
  return (
    <WrapperStyled direction='row' spacing={2}>
      <Typography component='h2' variant='h6'>Address</Typography>
      <IconButton color='primary' aria-label='добавить жильца'>
        <PersonAddIcon />
      </IconButton>
    </WrapperStyled>
  );
}

export default TenantsHeader;
