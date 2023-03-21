import {Dispatch} from "redux";
import {setAppErrorAC, setAppStatusAC} from "../store/reducers/app-reducer";


export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch) => {
    dispatch(setAppErrorAC({message: error.message}))
    dispatch(setAppStatusAC({status: 'failed'}))
}

