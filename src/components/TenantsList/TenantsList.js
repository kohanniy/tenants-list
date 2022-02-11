import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTenants } from '../../app/slices/tenantsSlice';
import { content } from '../../utils/content';
import TenantCard from '../TenantCard/TenantCard';
import { ListStyled } from './Styles';

function TenantsList() {
  const { tenants } = useSelector(selectTenants);
  if (tenants === null) {
    return (
      <Typography align='center' component='p' variant='h5'>
        {content.enterAddress}
      </Typography>
    );
  }

  if (tenants.length === 0) {
    return (
      <Typography align='center' component='p' variant='h5'>
        {content.noTenants}
      </Typography>
    );
  }

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
