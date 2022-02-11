import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import TenantsHeader from '../TenantsHeader/TenantsHeader';
import TenantsList from '../TenantsList/TenantsList';
import { sectionStyles } from './Styles';
import { tenants } from '../../mocks/tenants';
import Address from '../Address/Address';
import Loading from '../Loading/Loading';
import { getStreets, selectStreets } from '../../app/slices/streetsSlice';

function App() {
  const { status: streetsStatus } = useSelector(selectStreets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStreets());
  }, [dispatch]);

  return (
    <Box display='flex' flexDirection='column' component='main'>
      {streetsStatus === 'loading' ? (
        <Loading />
      ) : (
        <>
          <Container sx={sectionStyles} component='section'>
            {streetsStatus === 'loading' ? <Loading /> : <Address />}
          </Container>
          <Container sx={sectionStyles} component='section'>
            <TenantsHeader />
            <TenantsList tenants={tenants} />
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
