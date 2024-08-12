import { HTMLAttributes } from 'react';
import { organizers } from '../../utils/data';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement>{
    partners: typeof organizers;
    isOpen: number;
    setIsOpen: (isOpen: number) => void;
}
