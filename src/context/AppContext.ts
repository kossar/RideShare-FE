import React from "react";
import { IAuth } from "../types/IAuth";

export interface IAppState {
    auth: IAuth;

    setState: (auth: IAuth) => void;
    // setState: (
    //     jwt: string | null,
    //     firstName: string,
    //     lastName: string,
    //     supportedLanguages: ISupportedLanguage[],
    //     currentLanguage: ISupportedLanguage,
    //     langResources: ILangResources) => void;


}


export const initialAppState: IAppState = {
    auth: {
        token: null,
        firstname: '',
        lastname: '',
    },

    setState: (): void => { },

}

export const AppContext = React.createContext<IAppState>(initialAppState);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;