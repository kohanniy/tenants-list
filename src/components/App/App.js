import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import TenantsHeader from '../TenantsHeader/TenantsHeader';
import TenantsList from '../TenantsList/TenantsList';
import { sectionStyles, tenantsHeaderStyles } from './Styles';
import Address from '../Address/Address';
import Loading from '../Loading/Loading';
import { getStreets, selectStreets } from '../../app/slices/streetsSlice';
import { selectTenants } from '../../app/slices/tenantsSlice';

function App() {
  const { status: streetsStatus } = useSelector(selectStreets);
  const { status: tenantsStatus } = useSelector(selectTenants);
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
            <Address />
          </Container>
          <Container sx={sectionStyles} component='section'>
              <TenantsHeader sx={tenantsHeaderStyles} />
              {tenantsStatus === 'loading' ? <Loading /> : <TenantsList />}
          </Container>
        </>
      )}
    </Box>
  );
}

export default App;
