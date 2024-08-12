import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type typesState = {
    typesOfCompetitions: string[];
};

type typesActions = {
    loadTypesOfCompetitions: () => Promise<void>;
};

const typesOfCompetitionsSlice: StateCreator<typesState & typesActions, [['zustand/devtools', never]]> = (set) => ({
    typesOfCompetitions: [],
    loadTypesOfCompetitions: async () => {
        try {
            const response = await fetch('/types-of-competitions.json');
            const data = await response.json();
            set({ typesOfCompetitions: data.types }, false, 'loadTypesOfCompetitions');
        } catch (error) {
            console.error('Failed to load types of competitions:', error);
        }
    },
});

export const useTypesOfCompetitionsStore = create<typesState & typesActions>()(devtools(typesOfCompetitionsSlice));
