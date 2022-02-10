import { Grid } from '@mui/material';
import TenantCard from '../TenantCard/TenantCard';
import { ListStyled } from './Styles';

function TenantsList({ tenants }) {
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
