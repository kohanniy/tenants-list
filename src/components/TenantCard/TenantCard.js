import { useState } from 'react';
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
import { content } from '../../utils/content';
import ProfileFormModal from '../ProfileFormModal/ProfileFormModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateTenant } from '../../app/slices/tenantsSlice';
import { selectFlats } from '../../app/slices/flatsSlice';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

function TenantCard({ tenant }) {
  const [isFormChanged, setIsFormChanged] = useState(true);
  const { currentFlat } = useSelector(selectFlats);
  const { name, phone, email } = tenant;
  const dispatch = useDispatch();

  const defaultValues = {
    name,
    phone,
    email,
  };

  const handleSubmit = (data) => {
    if (data.name === name && data.phone === phone && data.email === email) {
      setIsFormChanged(false);
      return;
    }
    const values = {
      addressId: currentFlat.id,
      clientId: tenant.id,
    };

    const updatedData = { ...tenant, ...data };
    setIsFormChanged(true);
    dispatch(updateTenant({ values, updatedData }));
  };

  const handleConfirmButtonClick = () => {
    console.log('delete');
  };

  const openButtonForEditProfile = (
    <IconButton aria-label={content.editProfile}>
      <EditIcon />
    </IconButton>
  );

  const openButtonForConfirmModal = (
    <IconButton aria-label={content.deleteTenant}>
      <DeleteOutlineIcon />
    </IconButton>
  );
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
        <ConfirmModal
          openButton={openButtonForConfirmModal}
          onConfirmButtonClick={handleConfirmButtonClick}
        />
        <ProfileFormModal
          onSubmit={handleSubmit}
          submitButtonText={content.edit}
          title={content.editProfile}
          openButton={openButtonForEditProfile}
          defaultValues={defaultValues}
          isFormChanged={isFormChanged}
        />
      </CardActionsStyled>
    </CardStyled>
  );
}

export default TenantCard;
