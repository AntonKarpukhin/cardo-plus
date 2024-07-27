import { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    color: 'red' | 'black' | 'white' | 'gray';
    text: string;
}
