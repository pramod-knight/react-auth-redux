import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchema } from "../../type/login.type";
import authService from "../../service/auth.service";

export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }:LoginSchema, thunkAPI) => {
        const response = await authService.login(email,password);
        if(response.success){
            return response.data;
        }else{
            return thunkAPI.rejectWithValue(response.data);
        }
    }
);

export const LoginSlice = createSlice({
    name: "login",
    initialState: {
        auth: !!localStorage.getItem('auth'),
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: ""
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
           
            return state;
        },
        logout: (state) => {
            localStorage.clear();
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.auth=false;
            state.errorMessage= ""
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.auth = !!payload;
                state.isFetching = false;
                state.isSuccess = true;
                return state;
            })
            .addCase(loginUser.rejected, (state, { payload }:any) => {
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload.error
            })
            .addCase(loginUser.pending, (state) => {
                state.isFetching = true;
            })
    }
});

export const { clearState,logout } = LoginSlice.actions;

export const loginSelector = (state:any) => state.login;