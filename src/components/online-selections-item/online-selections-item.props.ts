import { HTMLAttributes } from 'react';
import { IOnlineSelections } from '../../interfaces/online-selections';

export interface OnlineSelectionsItemsProps extends HTMLAttributes<HTMLDivElement>{
    selectionsItems:IOnlineSelections[];
    toggleModal: () => void;
    setModalText: (text: string | null) => void;
}
