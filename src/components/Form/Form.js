import { Stack, Button, CircularProgress } from '@mui/material';
import { Children, createElement } from 'react';
import { useForm } from 'react-hook-form';
import { content } from '../../utils/content';
import ModalCloseButton from '../Modal/ModalCloseButton';
import { buttonStyles, ButtonsWrapper } from './Styles';

export default function Form({ children, submitButtonText, isLoading, onSubmit, defaultValue = null }) {
  const { control, handleSubmit } = useForm({ defaultValue });

  return (
    <Stack component='form' spacing={1} noValidate onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                control,
              },
            })
          : child;
      })}
      <ButtonsWrapper direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
        <ModalCloseButton>
          <Button sx={buttonStyles} variant='outlined' type='reset' disabled={isLoading}>
            {content.cancel}
          </Button>
        </ModalCloseButton>
        <Button sx={buttonStyles} variant='contained' type='submit' disabled={isLoading}>
          {isLoading ? <CircularProgress color='inherit' size={20} /> : submitButtonText}
        </Button>
      </ButtonsWrapper>
    </Stack>
  );
}
