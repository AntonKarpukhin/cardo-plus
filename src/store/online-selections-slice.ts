import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IOnlineSelections } from '../interfaces/online-selections';

type onlineSelectionsState = {
    selections: IOnlineSelections[];
};

type onlineSelectionsActions = {
    loadSelections: () => Promise<void>;
};

const onlineSelectionsSlice: StateCreator<onlineSelectionsState & onlineSelectionsActions, [['zustand/devtools', never]]> = (set) => ({
    selections: [],
    loadSelections: async () => {
        try {
            const response = await fetch('/online-selections.json');
            const data = await response.json();
            set({ selections: data }, false, 'loadSelections');
        } catch (error) {
            console.error('Failed to load selections:', error);
        }
    },
});

export const useOnlineSelectionsStore = create<onlineSelectionsState & onlineSelectionsActions>()(devtools(onlineSelectionsSlice));
