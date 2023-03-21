import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Language, LanguageType} from "../../enums/Language";


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
        setAppStatusAC(state, action) {
            state.status = action.payload
        },
        setAppErrorAC(state, action: PayloadAction<{ message: null | string }>) {
            state.error = action.payload.message
        },
        setPage: (state) => {
            state.page += 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
        setMistakes: (state, action: PayloadAction<number>) => {
            state.numberOfMistakes = action.payload;
        },
        setSeed: (state, action: PayloadAction<number>) => {
            state.seed = action.payload;
        },
        setLanguage: (state, action: PayloadAction<LanguageType>) => {
            state.language = action.payload;
        },
    }
})

export const appReducer = slice.reducer;
export const {setAppStatusAC, setAppErrorAC,  setPage, resetPage, setMistakes, setSeed, setLanguage} = slice.actions;

type InitialStateType = {
    numberOfMistakes: number
    page: number
    seed: number
    status: RequestStatusType
    language: LanguageType
    error: null | string
};

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


