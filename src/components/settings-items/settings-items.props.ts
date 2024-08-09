import { HTMLAttributes } from 'react';
import { ISettingsData } from '../../utils/data';

export interface SettingsItemsProps extends HTMLAttributes<HTMLDivElement>{
    items: ISettingsData[];
    switcher?: {[key: string]: boolean};
    changeParameters?: {[key: string]: () => void};
}
