import { ILocation } from "./ILocation";

export interface ITransportNeed {
    id?: string,
    startLocation: ILocation,
    destinationLocation: ILocation,
    description: string | undefined;
    personCount: number;
    startAt: Date | null,
    price: number | undefined,
  }
