import { ILocation } from "./ILocation";

export interface ITransport {
    id: string;
    finalPrice: number;
    pickUpTime: string;
    estimatedDeliveryTime: string | undefined;
    deliveredTime: string | undefined;
    pickUpLocation: ILocation;
    transportNeedId: string;
    transportOfferId: string;
}

export interface ITransportAdd {
    finalPrice: number;
    pickUpTime: string;
    estimatedDeliveryTime: string | undefined;
    deliveredTime: string | undefined;
    pickUpLocationId: string;
    transportNeedId: string;
    transportOfferId: string;
}