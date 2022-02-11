import { FormControl, InputLabel, FormHelperText } from '@mui/material';
import { useController } from 'react-hook-form';
import { helperTextStyles, StyledInput } from './Styles';

function InputGroup(props) {
  const { name, label, required = false, control, rules = null, inputProps, ...otherProps } = props;

  const {
    field: { ref, value, onChange },
    fieldState: { invalid, error },
    formState: { isSubmitting },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <FormControl fullWidth error={invalid} required={required} variant='standard'>
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <StyledInput
        autoComplete='true'
        inputRef={ref}
        id={name}
        margin='dense'
        value={value}
        onChange={onChange}
        inputProps={{
          disabled: isSubmitting,
          ...inputProps
        }}
        {...otherProps}
      />
      <FormHelperText sx={helperTextStyles}>{invalid ? error.message : ''}</FormHelperText>
    </FormControl>
  );
}

export default InputGroup;

//inputProps ={ disabled: isSubmitting }
