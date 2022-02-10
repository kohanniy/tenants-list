import { Avatar, Card, CardActions, CardContent, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1.5),
}));

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
}));

export const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  justifyContent: 'space-between',
  gap: theme.spacing(1.5),
  backgroundColor: theme.palette.grey.A100,
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  backgroundColor: 'transparent',
  '& .MuiSvgIcon-root': {
    width: '100%',
    height: '100%',
    fill: theme.palette.primary.main,
  },
}));

export const ContactsBlock = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isPhoneBlock',
})(({ isPhoneBlock = false, theme }) => ({
  alignItems: 'center',
  wordBreak: 'break-all',

  '& .MuiSvgIcon-root': {
    width: theme.typography.caption.fontSize,
    height: theme.typography.caption.fontSize,
  },

  ...(isPhoneBlock && {
    color: theme.palette.success.main,
  }),
}));

export const tenantNameStyles = {
  fontWeight: 'fontWeightMedium',
  wordBreak: 'break-all',
  lineHeight: 1.2,
};

export const tenantEmailStyles = {
  lineHeight: 1
}
