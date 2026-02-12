import { twelveApi } from '@/api/twelveApi';
import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '@/features/portfolioSlice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        twelveApi: twelveApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(twelveApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
