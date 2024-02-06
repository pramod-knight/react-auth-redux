import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignupSchema } from "../../type/login.type";
import authService from "../../service/auth.service";

export const registerUser = createAsyncThunk(
    "users/register",
    async ({ email, password }:SignupSchema, thunkAPI) => {
        const response = await authService.register(email,password);
        if(response.success){
            return response.data;
        }else{
            return thunkAPI.rejectWithValue(response.data);
        }
    }
);

export const RegisterSlice = createSlice({
    name: "signup",
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
            state.errorMessage= "";
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.auth = !!payload;
                state.isFetching = false;
                state.isSuccess = true;
                return state;
            })
            .addCase(registerUser.rejected, (state, { payload }:any) => {
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload.error
            })
            .addCase(registerUser.pending, (state) => {
                state.isFetching = true;
            })
    }
});

export const { clearState } = RegisterSlice.actions;

export const RegisterSelector = (state:any) => state.register;