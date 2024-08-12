import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IProgramCard } from '../interfaces/program-card';
import { filterDirection, filterProgram } from '../utils/programs-data-filter';

type programsState = {
    programs: IProgramCard[]
}

type programsActions = {
    getPrograms: (date: number, programs: string, direction: string) => Promise<void>;
}

const programsSlice: StateCreator<programsState & programsActions, [['zustand/devtools', never]]> = (set) => ({
    programs: [],
    getPrograms: async (date, programs, directions) => {
        try {
            const response = await fetch(`/events${date}.json`);
            const { events } = await response.json();
            const newProgram = filterProgram(filterDirection(events, directions), programs);
            set({ programs: newProgram }, false, 'getPrograms');
        } catch (error) {
            console.error('Failed to load programs:', error);
        }
    },
});

export const useProgramsStore = create<programsState & programsActions>()(devtools(programsSlice));
