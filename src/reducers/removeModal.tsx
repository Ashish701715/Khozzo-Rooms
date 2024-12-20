import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlertState {
    isVisible: boolean;
    title: string;
    text: string;
    icon: 'success' | 'error' | 'warning' | 'info' | 'question';
}

const initialState: AlertState = {
    isVisible: false,
    title: '',
    text: '',
    icon: 'info',
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert(state, action: PayloadAction<Omit<AlertState, 'isVisible'>>) {
            state.isVisible = true;
            state.title = action.payload.title;
            state.text = action.payload.text;
            state.icon = action.payload.icon;
        },
        hideAlert(state) {
            state.isVisible = false;
            state.title = '';
            state.text = '';
            state.icon = 'info';
        },
    },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
