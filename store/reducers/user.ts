import { LoginType, UserType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean,
    user: LoginType | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginType>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;