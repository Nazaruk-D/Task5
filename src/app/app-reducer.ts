import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Language, LanguageType} from "../enums/Language";
import {sendDataType, usersAPI} from "../api/usersAPI";
import {AppRootStateType} from "./store/store";
import {AxiosError} from "axios";
import {handleServerNetworkError} from "../utils/error-utils";


export const fetchUsers = createAsyncThunk('app/fetchUsers', async (payload: sendDataType, {rejectWithValue, getState, dispatch}) => {
        try {
            const state = getState() as AppRootStateType;
            return await usersAPI.fetchUsers({
                page: state.app.page,
                seed: state.app.seed,
                language: state.app.language,
                ...payload,
            });
        } catch (err: any) {
            const error: AxiosError = err.response.data
            handleServerNetworkError(error, dispatch)
            return rejectWithValue({errors: [error.message], fieldErrors: undefined})
        }
    },
);

export const fetchUsersSeed = createAsyncThunk('app/fetchUsersSeed', async (_, {rejectWithValue, getState, dispatch}) => {
        try {
            const state = getState() as AppRootStateType;
            return await usersAPI.fetchUsersSeed({
                page: state.app.page,
                seed: state.app.seed,
                language: state.app.language,
            });
        } catch (err: any) {
            const error: AxiosError = err.response.data
            handleServerNetworkError(error, dispatch)
            return rejectWithValue({errors: [error.message], fieldErrors: undefined})
        }
    },
);

const slice = createSlice({
    name: "app",
    initialState: {
        status: 'loading',
        numberOfMistakes: 0,
        page: 1,
        seed: 0,
        language: Language.US,
        error: null
    } as InitialStateType,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{ message: null | string }>) {
            state.error = action.payload.message
        },
        setPage: (state) => {
            state.page += 1;
        },
        resetPage: (state, action) => {
            state.page = 1;
        },
        setMistake: (state, action: PayloadAction<number>) => {
            state.numberOfMistakes = action.payload;
        },
        setSeed: (state, action: PayloadAction<number>) => {
            state.seed = action.payload;
        },
        setLanguage: (state, action: PayloadAction<LanguageType>) => {
            state.language = action.payload;
        },

    },
    extraReducers: builder => {
        // builder.addMatcher(
        //     action => action.type.endsWith('/pending'),
        //     state => {
        //         state.isProgress = true;
        //     },
        // );
        //
        // builder.addMatcher(
        //     action => action.type.endsWith('/rejected'),
        //     state => {
        //         state.isProgress = false;
        //     },
        // );
        //
        // builder.addMatcher(
        //     action => action.type.endsWith('/fulfilled'),
        //     state => {
        //         state.isProgress = false;
        //     },
        // );
    }
})

export const appReducer = slice.reducer;
export const {setAppStatusAC, setAppErrorAC,  setPage, resetPage, setMistake, setSeed, setLanguage} = slice.actions;

type InitialStateType = {
    numberOfMistakes: number
    page: number
    seed: number
    status: RequestStatusType
    language: LanguageType
    error: null | string
};

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


