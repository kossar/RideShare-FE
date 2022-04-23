import { CLogin, CRegister } from "../configuration";
import { ILoginInfo } from "../dto/ILoginInfo";
import { IRegisterInfo } from "../dto/IRegisterInfo";
import { ValidationInitializer } from "../helpers/ValidationInitializer";
import { IAuth } from "../types/IAuth";
import { IMessages } from "../types/IMessages";
import { IRegisterValidationProps } from "../types/IRegisterValidationProps";
import { BaseService } from "./BaseService";

export abstract class AccountService{

    static async register(registerInfo: IRegisterInfo): Promise<IMessages | IAuth | IRegisterValidationProps> {
        var response = await BaseService.post<IAuth | IMessages>(registerInfo, CRegister);
        if (response.ok) {
            console.log(response);
            let auth = response.data as IAuth;
            console.log(auth);
            return auth;
        }
        return response.data as IMessages;
    }

    public static validateRegister(registerInfo: IRegisterInfo): IRegisterValidationProps {
        let validation = ValidationInitializer.initialRegisterValidationState();
        validation.firstNameError = registerInfo.firstname === undefined || registerInfo.firstname.length < 2;
        validation.lastNameError = registerInfo.lastname === undefined || registerInfo.lastname.length < 2;
        validation.emailError = registerInfo.email === undefined || registerInfo.email.length < 2;
        validation.phoneError = registerInfo.phoneNumber === undefined || registerInfo.phoneNumber.length < 2;
        validation.passwordError = this.validatePassword(registerInfo.password);
        validation.passwordConfirmationError = registerInfo.password !== registerInfo.passwordConfirmation;

        // if(!validation.passwordError 
        //     && !validation.passwordConfirmationError 
        //     && registerInfo.password != registerInfo.passwordConfirmation)
        // {
        //     validation.passwordError = true;
        //     validation.passwordConfirmationError = true;
        //     validation.passwordErrorText = "Parool ja parooli kinnitus ei ühti"
        //     validation.passwordConfirmationErrorText = "Parool ja parooli kinnitus ei ühti"
        // }

        validation.anyError = validation.firstNameError 
            || validation.lastNameError
            || validation.emailError
            || validation.phoneError
            || validation.passwordError
            || validation.passwordConfirmationError;

        return validation;
    }

    private static validatePassword(input: string | undefined): boolean {
        if(input === undefined || input.length < 8){
            return false;
        }
        let str = String(input);
        let hasNumber = false;
        let hasCapitalAndLower = false;
        for( let i = 0; i < str.length; i++){
            if(!isNaN(Number(str.charAt(i)))){           //if the string is a number, do the following
                hasNumber = true;
                break;
            }
        }
        if(isNaN(Number(input))){
            hasCapitalAndLower = input !== input.toUpperCase();
        }
        console.log(hasNumber);
        console.log(hasCapitalAndLower);
        return !hasNumber && !hasCapitalAndLower;
    }
    static async login(loginInfo: ILoginInfo): Promise<IMessages | IAuth> {
        var response = await BaseService.post<IAuth | IMessages>(loginInfo, CLogin);
        if (response.ok) {
            console.log(response);
            let auth = response.data as IAuth;
            console.log(auth);
            return auth;
        }
        return response.data as IMessages;
    }
}