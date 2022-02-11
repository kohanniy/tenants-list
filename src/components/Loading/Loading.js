import { CircularProgress } from '@mui/material';
import { BoxStyled } from './Styles';

function Loading() {
  return (
    <BoxStyled>
      <CircularProgress />
    </BoxStyled>
  );
}

export default Loading;
