import { IconButton, Stack, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import {
  AvatarStyled,
  CardActionsStyled,
  CardContentStyled,
  ContactsBlock,
  ContentWrapper,
  tenantNameStyles,
  tenantEmailStyles,
  CardStyled,
} from './Styles';

function TenantCard({ tenant }) {
  return (
    <CardStyled sx={{ height: 1 }} variant='outlined'>
      <CardContentStyled>
        <ContentWrapper direction='row' spacing={1}>
          <AvatarStyled>
            <AccountCircleOutlinedIcon />
          </AvatarStyled>
          <Stack spacing={1}>
            {tenant.name && (
              <Typography component='p' variant='caption' sx={tenantNameStyles}>
                {tenant.name}
              </Typography>
            )}
            <ContactsBlock isPhoneBlock direction='row' spacing={1}>
              <LocalPhoneOutlinedIcon fontSize='small' />
              <Typography component='p' variant='caption'>
                {tenant.phone}
              </Typography>
            </ContactsBlock>
            {tenant.email && (
              <ContactsBlock direction='row' spacing={1}>
                <LocalPostOfficeOutlinedIcon />
                <Typography sx={tenantEmailStyles} component='p' variant='caption'>
                  {tenant.email}
                </Typography>
              </ContactsBlock>
            )}
          </Stack>
        </ContentWrapper>
      </CardContentStyled>
      <CardActionsStyled>
        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
      </CardActionsStyled>
    </CardStyled>
  );
}

export default TenantCard;
