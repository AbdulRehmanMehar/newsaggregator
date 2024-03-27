import { createSlice } from '@reduxjs/toolkit';
import { Filters, Preferences } from '../../types';

let preferences: Preferences | undefined = undefined;

const localStorageKey = 'PREFERENCES';
const prefsString = localStorage.getItem(localStorageKey);

if (prefsString) preferences = JSON.parse(prefsString)

type AppState = {
    filters?: Filters;
    preferences?: Preferences;
}



const initialState = {
  filters: undefined,
  preferences
} as AppState;

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setFilters: (state, { payload: filters }: { payload: Filters | undefined }) => {
      state.filters = filters;
    },
    setPreferences: (state, { payload: preferences }: { payload: Preferences | undefined }) => {
      state.preferences = preferences;

      localStorage.setItem(localStorageKey, JSON.stringify(preferences));
    }
  },
});

export const { setPreferences, setFilters } = appSlice.actions;
export default appSlice;