import { Box, Container, Typography, Stack } from '@mui/material';
import TenantsHeader from '../TenantsHeader/TenantsHeader';
import TenantsList from '../TenantsList/TenantsList';
import SelectField from '../SelectField/SelectField';
import { sectionStyles, titleStyles } from './Styles';
import { tenants } from '../../mocks/tenants';
import { streets } from '../../mocks/streets';

function App() {
  return (
    <Box component='main'>
      <Container sx={sectionStyles} component='section'>
        <Typography sx={titleStyles} component='h2' variant='h5'>
          Адрес 
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <SelectField getOptionLabel={(option) => option.Name} options={streets} inputLabel='Улица' id='streets' />
          <SelectField getOptionLabel={(option) => option.Name} options={streets} inputLabel='Улица' id='streets' />
          <SelectField getOptionLabel={(option) => option.Name} options={streets} inputLabel='Улица' id='streets' />
        </Stack>
      </Container>
      <Container sx={sectionStyles} component='section'>
        <TenantsHeader />
        <TenantsList tenants={tenants} />
      </Container>
    </Box>
  );
}

export default App;
