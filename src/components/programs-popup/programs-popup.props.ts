import { HTMLAttributes } from 'react';

export interface ProgramsPopupProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'cardo' | 'yog';
    title?: string;
    date?: string;
    location?: string;
    direction?: string;
    description?: string;
    closePopup?: () => void;
}
