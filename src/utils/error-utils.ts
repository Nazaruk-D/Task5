import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "../app/app-reducer";

export const handleServerAppError = (data: any, dispatch: Dispatch) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC({message: data.messages[0]}))
    } else {
        dispatch(setAppErrorAC({message: 'Some error occurred'}))
    }
    dispatch(setAppStatusAC({status: 'failed'}))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setAppErrorAC({message: error.message}))
    dispatch(setAppStatusAC({status: 'failed'}))
}

