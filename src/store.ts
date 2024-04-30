import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./redux/services/postApi";

export const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            postApi.middleware
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
