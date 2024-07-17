import { createAsyncThunk } from "@reduxjs/toolkit";   
import { client, setAutHeader, clearAuthHeader } from "../../lib/client"

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const res = await client.post("users/signup", credentials);
            setAutHeader(res.data.token);
            return res.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await client.post("users/login", credentials);
            setAutHeader(res.data.token);
            return res.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        await client.post("users/logout");
        clearAuthHeader();
    }   catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }

        try {
            setAutHeader(persistedToken);
            const res = await client.get("users/me");
            return res.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);