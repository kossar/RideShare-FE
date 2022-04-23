import { IMessages } from "../types/IMessages";
import { IRegisterValidationProps } from "../types/IRegisterValidationProps";

export abstract class ValidationInitializer {

    public static initialRegisterValidationState(): IRegisterValidationProps{
        return {
            anyError: false,
            firstNameError: false,
            firstNameErrorText: 'Eesnimi on kohustuslik',
            lastNameError: false,
            lastNameErrorText: 'Perekonnanimi on kohustuslik',
            phoneError: false,
            phoneErrorText: 'Telefoninumber on kohustuslik',
            emailError: false,
            emailErrorText: 'E-mail on kohustuslik',
            passwordError: false,
            passwordErrorText: 'Parool peab sisaldama vähemalt 8 tähemärki, sealhulgas peab olema vähemalt 1 suur täht, 1 väike täht ja 1 number',
            passwordConfirmationError: false,
            passwordConfirmationErrorText: "Parool ja parooli kinnitus ei ühti"
        }
    }

    public static initMessages(): IMessages {
        return {
            messages: []
        }
    }
}