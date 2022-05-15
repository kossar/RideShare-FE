import { ILocation } from "../dto/ILocation";
import { ILocationValidationProps } from "./ILocationValidationProps";

export type ILocationCreateEditProps = {
    location: ILocation, 
    locationErrors: ILocationValidationProps,
    setLocation: (location: ILocation) => void
}