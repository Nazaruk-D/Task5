import {LanguageType} from "../../enums/Language";
import {AppRootStateType} from "../store";
import {UserType} from "../../api/usersAPI";

export const selectorStatusApp = (state: AppRootStateType): string => state.app.status;
export const selectorNumberOfMistakes = (state: AppRootStateType): number => state.app.numberOfMistakes;
export const selectorLanguage = (state: AppRootStateType): LanguageType => state.app.language;
export const selectorUsers = (state: AppRootStateType): UserType[] => state.users;
export const selectorUsersFinish = (state: AppRootStateType): UserType[] => state.usersFinish;

