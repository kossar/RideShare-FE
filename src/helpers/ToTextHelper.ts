import { ILocation } from "../dto/ILocation";
import { IVehicle } from "../dto/IVehicle";
import { format } from 'date-fns'

export class ToTextHelper {
    static locationToText = (location: ILocation): string => {
        return `${ location.address } ${ location.city } ${ location.province } ${ location.country }`;
    }

    static vehicleToText = (vehicle: IVehicle): string => {
        return `${ vehicle.number } ${ vehicle.make } ${ vehicle.model }`;
    }

    static dateToText = (date: Date | string | undefined) => {
        if(!date){
            return '';
        }
        return format(new Date(date), 'MM.dd.yyyy hh:MM');
    }
}