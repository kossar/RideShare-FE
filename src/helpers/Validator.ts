import { ILocation } from "../dto/ILocation";
import { ITransportNeed } from "../dto/ITransportNeed";
import { ITransportOffer } from "../dto/ITransportOffer";
import { IVehicle } from "../dto/IVehicle";
import { ILocationValidationProps } from "../types/ILocationValidationProps";
import { ITransportNeedValidationProps } from "../types/ITransportNeedValidationProps";
import { ITransportOfferValidationProps } from "../types/ITransportOfferValidationProps";
import { IVehicleValidationProps } from "../types/IVehicleValidationProps";
import { ValidationInitializer } from "./ValidationInitializer";

export const locationValidation = (location: ILocation): ILocationValidationProps =>{
    const locationValidState = ValidationInitializer.initialLocationValidationState();

    locationValidState.cityError = validateTextHasValue(location.city);
    locationValidState.addressError = validateTextHasValue(location.address);
    locationValidState.anyError = locationValidState.cityError || locationValidState.addressError;

    return locationValidState;
}

export const transportNeedValidation = (transportNeed: ITransportNeed): ITransportNeedValidationProps =>{
    const transportNeedValidState = ValidationInitializer.initialTransportNeedValidationState();
    
    transportNeedValidState.personCountError = validateNumberHasNotValue(transportNeed.personCount);
    transportNeedValidState.startAtError = validateDateHasNotValue(transportNeed.startAt);
    transportNeedValidState.anyError = transportNeedValidState.personCountError || transportNeedValidState.startAtError;
    
    return transportNeedValidState;
}

export const transportOfferValidation = (transportOffer: ITransportOffer): ITransportOfferValidationProps =>{
    const transportOfferValidState = ValidationInitializer.initialTransportOfferValidationState();
    
    transportOfferValidState.availableSeatCountError = validateNumberHasNotValue(transportOffer.availableSeatCount);
    transportOfferValidState.startAtError = validateDateHasNotValue(transportOffer.startAt);
    transportOfferValidState.anyError = transportOfferValidState.availableSeatCountError || transportOfferValidState.startAtError;
    
    return transportOfferValidState;
}

export const vehicleValidation = (vehicle: IVehicle): IVehicleValidationProps =>{
    const vehicleValidState = ValidationInitializer.initialVehicleValidationState();
    
    vehicleValidState.numberError = validateTextHasValue(vehicle.number);
    vehicleValidState.anyError = vehicleValidState.numberError;
    
    return vehicleValidState;
}

export const validateDateHasNotValue = (date: Date | undefined | null): boolean => {
    return date === undefined || date === null || date < new Date();
}

export const validateNumberHasNotValue = (number: number | undefined | null): boolean => {
    return number === undefined || number === null || number < 1;
}

export const validateTextHasValue = (text: string | undefined): boolean => {
    return text === undefined || text.length < 1;
}