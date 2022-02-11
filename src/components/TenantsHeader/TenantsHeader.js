import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { WrapperStyled } from './Styles';
import ProfileFormModal from '../ProfileFormModal/ProfileFormModal';
import { selectStreets } from '../../app/slices/streetsSlice';
import { selectHouses } from '../../app/slices/housesSlice';
import { selectFlats } from '../../app/slices/flatsSlice';
import { content } from '../../utils/content';
import { addTenant, selectTenants } from '../../app/slices/tenantsSlice';
import { adaptData } from '../../utils/utils';

function TenantsHeader({ sx = null }) {
  const { currentStreet } = useSelector(selectStreets);
  const { currentHouse } = useSelector(selectHouses);
  const { currentFlat } = useSelector(selectFlats);
  const { status: tenantsStatus } = useSelector(selectTenants);

  const dispatch = useDispatch();

  const streetName = currentStreet?.nameWithPrefix.split(', ').reverse().join('. ');

  const fullAddress = () => {
    if (!currentStreet) return null;
    if (!currentHouse) return `${streetName}`;
    if (!currentFlat) return `${streetName}, ${currentHouse.name}`;

    return `${streetName}, ${currentHouse.name}, ${currentFlat.name}`;
  };

  const handleSubmit = (data) => {
    const adaptedData = adaptData(data);
    dispatch(addTenant(adaptedData));
  };

  return (
    <WrapperStyled direction='row' spacing={2} sx={sx}>
      {fullAddress() && (
        <Typography component='h2' variant='h6'>
          {fullAddress()}
        </Typography>
      )}
      {currentStreet && currentHouse && currentFlat && (
        <ProfileFormModal
          onSubmit={handleSubmit}
          submitButtonText={content.add}
          title={content.addTenant}
          status={tenantsStatus}
        />
      )}
    </WrapperStyled>
  );
}

export default TenantsHeader;
