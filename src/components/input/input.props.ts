import { ChangeEventHandler, HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  disabled?: boolean;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  datatype: string;
}
