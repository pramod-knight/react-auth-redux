import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./slices/login.slices";
import { RegisterSlice } from "./slices/register.slices";
const store = configureStore({
    reducer: {
      login:LoginSlice.reducer,
      register:RegisterSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export default store;