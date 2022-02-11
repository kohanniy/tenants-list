import { useSelector } from 'react-redux';
import { Typography, IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { WrapperStyled } from './Styles';
import { selectStreets } from '../../app/slices/streetsSlice';
import { selectHouses } from '../../app/slices/housesSlice';
import { selectFlats } from '../../app/slices/flatsSlice';

function TenantsHeader({ sx = null }) {
  const { currentStreet } = useSelector(selectStreets);
  const { currentHouse } = useSelector(selectHouses);
  const { currentFlat } = useSelector(selectFlats);

  const streetName = currentStreet?.nameWithPrefix.split(', ').reverse().join('. ');

  const fullAddress = () => {
    if (!currentStreet) return null;
    if (!currentHouse) return `${streetName}`;
    if (!currentFlat) return `${streetName}, ${currentHouse.name}`;

    return `${streetName}, ${currentHouse.name}, ${currentFlat.name}`;
  };

  return (
    <WrapperStyled direction='row' spacing={2} sx={sx}>
      {fullAddress() && (
        <Typography component='h2' variant='h6'>
          {fullAddress()}
        </Typography>
      )}
      {currentStreet && currentHouse && currentFlat && (
        <IconButton sx={{ ml: 'auto' }} color='primary' aria-label='добавить жильца'>
          <PersonAddIcon />
        </IconButton>
      )}
    </WrapperStyled>
  );
}

export default TenantsHeader;
