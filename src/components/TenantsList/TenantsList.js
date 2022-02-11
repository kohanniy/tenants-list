import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTenants } from '../../app/slices/tenantsSlice';
import TenantCard from '../TenantCard/TenantCard';
import { ListStyled } from './Styles';

function TenantsList() {
  const { tenants } = useSelector(selectTenants);
  return (
    <ListStyled container spacing={2} component='ul'>
      {tenants.map((tenant) => (
        <Grid key={tenant.id} component='li' item xs={12} sm={6} md={4} lg={3}>
          <TenantCard tenant={tenant} />
        </Grid>
      ))}
    </ListStyled>
  );
}

export default TenantsList;
