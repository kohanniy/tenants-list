import { Autocomplete, TextField } from '@mui/material';

function SelectField({inputLabel, ...props}) {
  return (
    <Autocomplete
      fullWidth
      disablePortal
      renderInput={(params) => <TextField {...params} label={inputLabel} />}
      {...props}
    />
  );
}

export default SelectField
