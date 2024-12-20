import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DocumentState {
    title: string; 
}

const initialState: DocumentState = {
    title: 'Default Title', 
};

const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;  
        },
    },
});
export const { setTitle } = documentSlice.actions;
export default documentSlice.reducer;
