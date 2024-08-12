import { HTMLAttributes } from 'react';
import { IProgramCard } from '../../interfaces/program-card';
import { ProgramsPopupProps } from '../programs-popup/programs-popup.props';

export interface ProgramCardProps extends HTMLAttributes<HTMLButtonElement> {
    card: IProgramCard;
    openPopup: (data: ProgramsPopupProps) => void;
}
