import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';



const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
   
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;


export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
