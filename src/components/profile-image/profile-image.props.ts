import { HTMLAttributes } from 'react';

export interface ProfileImageProps extends HTMLAttributes<HTMLDivElement> {
    img: string;
    name?: string;
    email?: string;
    type: 'profile' | 'information';
}
