import { HTMLAttributes } from 'react';

export interface ProgramsButtonDateProps extends HTMLAttributes<HTMLButtonElement> {
    date: number;
    active?: boolean;
    handleDataChange: (data: number) => void;
}
