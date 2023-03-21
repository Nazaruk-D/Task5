import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from "../../api/usersAPI";

const slice = createSlice({
    name: 'changedUsers',
    initialState: [] as UserType[],
    reducers: {
        resetChangedUsers () {
            return []
        },
        setChangedUsers(state, action: PayloadAction<{ users: UserType[] }>) {
            return action.payload.users
        },
    },
});

export const changedUsersReducer = slice.reducer;
export const { resetChangedUsers, setChangedUsers } = slice.actions;
