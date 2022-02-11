import { Typography, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectStreets } from '../../app/slices/streetsSlice';
import SelectField from '../SelectField/SelectField';

function Address() {
  const { streets } = useSelector(selectStreets);
  console.log(streets);
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
        />
        {/* <SelectField
          getOptionLabel={(option) => option.Name}
          options={streets}
          inputLabel='Улица'
          id='streets'
        />
        <SelectField
          getOptionLabel={(option) => option.Name}
          options={streets}
          inputLabel='Улица'
          id='streets'
        /> */}
      </Stack>
    </>
  );
}

export default Address
