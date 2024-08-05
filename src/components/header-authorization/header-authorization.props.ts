import { HTMLAttributes } from 'react';

export interface HeaderAuthorizationProps extends HTMLAttributes<HTMLDivElement> {
    status: 'back' | 'close';
    text?: string;
    path?: string;
}
