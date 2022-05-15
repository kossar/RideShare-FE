import { ILocation } from "./ILocation";
import { IVehicle } from "./IVehicle";

export interface ITransportOffer{
    id?: string;
    startLocation: ILocation,
    destinationLocation: ILocation,
    vehicle: IVehicle;
    price: number | undefined,
    availableSeatCount: number,
    startAt: Date | null,
    description: string | undefined,
    isAd: boolean,
}
