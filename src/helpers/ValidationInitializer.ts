import { ILocationValidationProps } from "../types/ILocationValidationProps";
import { IMessages } from "../types/IMessages";
import { IRegisterValidationProps } from "../types/IRegisterValidationProps";
import { ITransportNeedValidationProps } from "../types/ITransportNeedValidationProps";
import { ITransportOfferValidationProps } from "../types/ITransportOfferValidationProps";
import { IVehicleValidationProps } from "../types/IVehicleValidationProps";

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

    public static initialLocationValidationState(): ILocationValidationProps{
        return {
            anyError: false,
            cityError: false,
            cityErrorText: 'Linn on kohustuslik',
            addressError: false,
            addressErrorText: 'Aadress on kohustuslik',
        }
    }

    public static initialTransportNeedValidationState(): ITransportNeedValidationProps{
        return {
            anyError: false,
            personCountError: false,
            personCountErrorText: 'Inimeste arv on kohustuslik',
            startAtError: false,
            startAtErrorText: 'Sõidusoovi aeg on kohustuslik',
        }
    }

    public static initialTransportOfferValidationState(): ITransportOfferValidationProps{
        return {
            anyError: false,
            availableSeatCountError: false,
            availableSeatCountErrorText: 'Kohtade arv on kohustuslik',
            startAtError: false,
            startAtErrorText: 'Sõidusoovi aeg on kohustuslik',
        }
    }

    public static initialVehicleValidationState(): IVehicleValidationProps {
        return{
            anyError: false,
            numberError: false,
            numberErrorText: "Sõiduki numbri märk on kohustuslik",
        }
    }


    public static initMessages(): IMessages {
        return {
            messages: []
        }
    }
}