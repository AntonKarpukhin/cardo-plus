import React, { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  error?: boolean;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
