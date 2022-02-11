import { Typography, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses, resetHouses, setCurrentHouse } from '../../app/slices/housesSlice';
import { getFlats, resetFlats, selectFlats, setCurrentFlat } from '../../app/slices/flatsSlice';
import { selectStreets, setCurrentStreet } from '../../app/slices/streetsSlice';
import { selectHouses } from '../../app/slices/housesSlice';
import SelectField from '../SelectField/SelectField';
import { getTenants, resetTenants } from '../../app/slices/tenantsSlice';
import { content } from '../../utils/content';

function Address() {
  const { streets } = useSelector(selectStreets);
  const { houses } = useSelector(selectHouses);
  const { flats } = useSelector(selectFlats);
  const dispatch = useDispatch();

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

  const getOptionLabel = (option) => option.name;

  const selectFieldProps = [
    {
      options: streets ? streets : [],
      inputLabel: content.street,
      id: 'streets',
      onChange: handleStreetsSelectChange,
    },
    {
      options: houses ? houses : [],
      inputLabel: content.house,
      id: 'houses',
      onChange: handleHousesSelectChange,
      disabled: houses === null,
    },
    {
      options: flats ? flats : [],
      inputLabel: content.flat,
      id: 'flats',
      onChange: handleFlatsSelectChange,
      disabled: flats === null,
    },
  ];

  return (
    <>
      <Typography sx={{ mb: 2 }} component='h2' variant='h5'>
        {content.address}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
        {selectFieldProps.map((field) => (
          <SelectField
            key={field.id}
            getOptionLabel={getOptionLabel}
            {...field}
          />
        ))}
      </Stack>
    </>
  );
}

export default Address;
