import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { WrapperStyled } from './Styles';
import ProfileFormModal from '../ProfileFormModal/ProfileFormModal';
import { selectStreets } from '../../app/slices/streetsSlice';
import { selectHouses } from '../../app/slices/housesSlice';
import { selectFlats } from '../../app/slices/flatsSlice';
import { content } from '../../utils/content';

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

  const handleSubmit = (data) => {
    console.log(data);
  }

  return (
    <WrapperStyled direction='row' spacing={2} sx={sx}>
      {fullAddress() && (
        <Typography component='h2' variant='h6'>
          {fullAddress()}
        </Typography>
      )}
      {currentStreet && currentHouse && currentFlat && (
        <ProfileFormModal onSubmit={handleSubmit} submitButtonText={content.add} title={content.addTenant} />
      )}
    </WrapperStyled>
  );
}

export default TenantsHeader;
