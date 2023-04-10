import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { Action, ThunkAction, combineReducers } from '@reduxjs/toolkit';
import collapseReducer from './features/collapseSlice';
// import todosReducer from './todosSlice';

const rootReducer = combineReducers({
    collapse: collapseReducer,
//   todos: todosReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware({
        thunk: true,
        immutableCheck: true,
        serializableCheck: true,
    })
});
    
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;
