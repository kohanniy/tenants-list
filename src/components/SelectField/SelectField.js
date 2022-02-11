import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { content } from '../../utils/content';
import { useSortedOptions } from '../../hooks/useSortOptions';

function SelectField({ inputLabel, options, onChange, ...props }) {
  const [value, setValue] = useState(null);

  const { sortedOptions, groupBy } = useSortedOptions(options);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const getOptionDisabled = (option) => (option.cityId && option.cityId !== 1) || (value && option.id === value.id);
  const isOptionEqualToValue = (option, value) => option.id === value.id;

  useEffect(() => {
    if (options.length === 0) {
      setValue(null);
    }
  }, [options.length]);

  return (
    <Autocomplete
      fullWidth
      clearOnEscape
      disableClearable
      noOptionsText={content.notFount}
      openText={content.open}
      closeText={content.close}
      options={sortedOptions}
      groupBy={groupBy}
      value={value}
      onChange={handleChange}
      getOptionDisabled={getOptionDisabled}
      isOptionEqualToValue={isOptionEqualToValue}
      renderInput={(params) => <TextField {...params} label={inputLabel} />}
      {...props}
    />
  );
}

export default SelectField;
