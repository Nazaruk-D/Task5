import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {sendDataType, usersAPI, UserType} from "../../../api/usersAPI";
import {AppRootStateType} from "../store";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../../utils/error-utils";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async (payload: sendDataType, { getState, dispatch })=> {
        try {
            const state = getState() as AppRootStateType;
            const res = await usersAPI.fetchUsers({
                page: state.app.page,
                seed: state.app.seed,
                language: state.app.language,
                ...payload,
            });
            return res.data
        } catch (err: any) {
            const error: AxiosError = err.response.data
            handleServerNetworkError(error, dispatch)
        }
    },
);

export const fetchUsersSeed = createAsyncThunk('usersSlice/fetchUsersSeed', async (_, { dispatch, getState }) => {
        try {
            const state = getState() as AppRootStateType;
            const res = await usersAPI.fetchUsers({
                page: state.app.page,
                seed: state.app.seed,
                language: state.app.language,
            });
            return res.data
        } catch (err: any) {
            const error: AxiosError = err.response.data
            handleServerNetworkError(error, dispatch)
        }
    },
);


const USER_TO_TWO_FIRST_PAGE = 20;



const slice = createSlice({
    name: 'users',
    initialState: [] as UserType[],
    reducers: {
        resetUser () {
            return []
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            if (state.length) {
                return [...state, ...action.payload!];
            } else {
                return [...action.payload!];
            }
        });
        builder.addCase(fetchUsersSeed.fulfilled, (state, action) => {
            // const payload = action.payload as unknown as UserResponseType;
            // const startUser = state.slice(0, state.length - USER_TO_TWO_FIRST_PAGE);
            // state = [...startUser, ...payload.users];
        });
    },
});
export const usersReducer = slice.reducer;
export const { resetUser } = slice.actions;
