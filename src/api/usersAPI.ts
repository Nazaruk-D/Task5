import {LanguageType} from "../enums/Language";
import {instance} from "./instance";


export const usersAPI = {
    fetchUsers(payload: sendDataType) {
        return instance.post<ResponseType<UserType[]>>(`users`, payload).then((response) => response.data)
    },
    fetchUsersSeed(payload: sendDataType) {
        return instance.post<ResponseType<UserType[]>>(`seed`, payload).then((response) => response.data)
    },
}

export type ResponseType<D = {}> = {
    statusCode: number
    message: Array<string>
    data: D
}

export type sendDataType = {
    page?: number;
    amount?: number;
    language?: LanguageType;
    seed?: number;
};

export type UserType = {
    id: string;
    number: string;
    name: string;
    address: string;
    phoneNumber: string;
};