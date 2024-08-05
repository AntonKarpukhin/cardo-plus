import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    color: 'red' | 'white';
    text: string;
    type: 'submit' | 'button';
    path?: string;
}
