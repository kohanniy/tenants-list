import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },

  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: 'transparent',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color']),

    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },

  '&.Mui-error .MuiInputBase-input': {
    borderColor: theme.palette.error.main,
  },
}));

export const helperTextStyles = {
  minHeight: '20px',
  lineHeight: 1,
};
