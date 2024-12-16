import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoggedState {
  value: boolean;
}

const initialState: LoggedState = {
  value: false,
};

const loggedDisplay = createSlice({
  name: 'loggedDisplay',
  initialState,
  reducers: {
    loggedIn(state) {
      state.value = true;
    },
    loggedOut(state) {
      state.value = false;
    },
  },
});

export const { loggedIn, loggedOut } = loggedDisplay.actions;
export default loggedDisplay.reducer;