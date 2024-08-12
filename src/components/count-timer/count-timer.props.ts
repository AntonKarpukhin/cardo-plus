import { HTMLAttributes } from 'react';

export interface CountTimerProps extends HTMLAttributes<HTMLDivElement> {
    targetDate: string;
}
