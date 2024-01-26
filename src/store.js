import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { articleAPI } from './Services/API';
import { productAPI } from './Services/API';
import { commentsAPI } from './Services/API';

export const store = configureStore({
    reducer: {
        [articleAPI.reducerPath]: articleAPI.reducer,
        [productAPI.reducerPath]: productAPI.reducer, 
        [commentsAPI.reducerPath]: commentsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleAPI.middleware, productAPI.middleware, commentsAPI.middleware),
});

setupListeners(store.dispatch);
