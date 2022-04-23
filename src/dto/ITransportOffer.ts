import { IVehicle } from "./IVehicle";

export interface ITransportOffer{
    id?: string;
    description: string | undefined;
    price: number;
    freeSeats: number;
    userId: string;
    vehicleId: string | undefined;
}
