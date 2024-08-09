import { StateCreator } from 'zustand/vanilla';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IUserProfile } from '../interfaces/profile';

type profileState = {
    profile: IUserProfile
}

type profileActions = {
    getProfile: () => Promise<void>;
    setProfile: (profile: IUserProfile) => void;
};

const profileSlice: StateCreator<profileState & profileActions, [['zustand/devtools', never]]> = (set, get) => ({
    profile: { email: '', name: '', surname: '' },
    getProfile: async () => {
        try {
            const response = await fetch('/profile.json');
            const data = await response.json();
            set({ profile: data }, false, 'getProfile');
        } catch (error) {
            console.error('Failed to load selections:', error);
        }
    },
    setProfile: (profile: IUserProfile) => {},
});

export const useProfileStore = create<profileState & profileActions>()(devtools(profileSlice));
