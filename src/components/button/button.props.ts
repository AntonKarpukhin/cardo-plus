import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'red' | 'white';
    text: string;
    type: 'submit' | 'button';
}
