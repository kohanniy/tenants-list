import isEmail from 'validator/lib/isEmail';
import { content } from './content';

export const profileInputData = [
  {
    name: 'name',
    label: content.fullName,
    inputProps: {
      type: 'text',
    },
  },
  {
    name: 'phone',
    label: content.phoneNumber,
    inputProps: {
      type: 'tel',
    },
    required: true,
    rules: { required: content.requiredField },
  },
  {
    name: 'email',
    label: content.email,
    inputProps: {
      type: 'email',
    },
    rules: {
      validate: (value) => {
        if (!value) return;

        return isEmail(value) || content.invalidEmail;
      },
    },
  },
];
