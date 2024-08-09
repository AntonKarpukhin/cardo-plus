import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ISelections } from '../interfaces/selections';

type selectionsState = {
    selections: ISelections[];
};

type selectionsActions = {
    loadSelections: () => Promise<void>;
};

const selectionsSlice: StateCreator<selectionsState & selectionsActions, [['zustand/devtools', never]]> = (set) => ({
    selections: [],
    loadSelections: async () => {
        try {
            const response = await fetch('/selections.json');
            const data = await response.json();
            set({ selections: data }, false, 'loadSelections');
        } catch (error) {
            console.error('Failed to load selections:', error);
        }
    },
});

export const useSelectionsStore = create<selectionsState & selectionsActions>()(devtools(selectionsSlice));
