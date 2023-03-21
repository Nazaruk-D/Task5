import {LanguageType} from "../../../enums/Language";
import {AppRootStateType} from "../store";
import {UserType} from "../../../api/usersAPI";

export const selectorStatusApp= (state: AppRootStateType): string => state.app.status;
export const selectorSeed = (state: AppRootStateType): number => state.app.seed;
export const selectorNumberOfMistakes = (state: AppRootStateType): number => state.app.numberOfMistakes;
export const selectorLanguage = (state: AppRootStateType): LanguageType => state.app.language;
export const selectorPage = (state: AppRootStateType): number => state.app.page;

export const selectorUsers = (state: AppRootStateType): UserType[] => state.users;

