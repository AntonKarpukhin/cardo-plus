import { HTMLAttributes } from 'react';
import { ISelections } from '../../interfaces/selections';

export interface ProfileSliderProps extends HTMLAttributes<HTMLDivElement>{
    sliderItems: ISelections[];
}
