import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {sendDataType, usersAPI, UserType} from "../../api/usersAPI";
import {AppRootStateType} from "../store";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../../utils/error-utils";
import {setAppStatusAC} from "./app-reducer";
import {setChangedUsers} from "./changedUsers-reducer";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (payload: sendDataType, { getState, dispatch })=> {
        dispatch(setAppStatusAC('loading'))
        try {
            const state = getState() as AppRootStateType;
            const res = await usersAPI.fetchUsers({
                page: state.app.page,
                seed: state.app.seed,
                language: state.app.language,
                ...payload,
            });
            dispatch(setChangedUsers({users: res.data}))
            dispatch(setAppStatusAC('succeeded'))
            return res.data
        } catch (err: any) {
            const error: AxiosError = err.response.data
            handleServerNetworkError(error, dispatch)
        }
    },
);


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
    },
});
export const usersReducer = slice.reducer;
export const { resetUser } = slice.actions;
