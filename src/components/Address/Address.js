import { Typography, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses, resetHouses, setCurrentHouse } from '../../app/slices/housesSlice';
import { getFlats, resetFlats, selectFlats, setCurrentFlat } from '../../app/slices/flatsSlice';
import { selectStreets, setCurrentStreet } from '../../app/slices/streetsSlice';
import { selectHouses } from '../../app/slices/housesSlice';
import SelectField from '../SelectField/SelectField';
import { getTenants, resetTenants } from '../../app/slices/tenantsSlice';

function Address() {
  const { streets } = useSelector(selectStreets);
  const { houses } = useSelector(selectHouses);
  const { flats } = useSelector(selectFlats);
  const dispatch = useDispatch();

  console.log(houses);

  const handleStreetsSelectChange = (value) => {
    dispatch(getHouses(value.id));
    dispatch(setCurrentStreet(value));
    dispatch(resetHouses());
    dispatch(resetFlats());
    dispatch(resetTenants());
  };

  const handleHousesSelectChange = (value) => {
    dispatch(getFlats(value.id));
    dispatch(setCurrentHouse(value));
    dispatch(resetFlats());
    dispatch(resetTenants());
  };

  const handleFlatsSelectChange = (value) => {
    dispatch(getTenants(value.id));
    dispatch(setCurrentFlat(value));
  };

  return (
    <>
      <Typography sx={{ mb: 2 }} component='h2' variant='h5'>
        Адрес
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        <SelectField
          getOptionLabel={(option) => option.name}
          options={streets}
          inputLabel='Улица'
          id='streets'
          onChange={handleStreetsSelectChange}
        />
        <SelectField
          getOptionLabel={(option) => option.name}
          options={houses}
          inputLabel='Дом'
          id='houses'
          disabled={houses.length === 0}
          onChange={handleHousesSelectChange}
        />
        <SelectField
          getOptionLabel={(option) => option.name}
          options={flats}
          inputLabel='Квартира/Офис'
          id='houses'
          disabled={flats.length === 0}
          onChange={handleFlatsSelectChange}
        />
      </Stack>
    </>
  );
}

export default Address;
