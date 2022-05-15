export interface ITransportAdListItem{
    id: string,
    startLocationCity: string;
    destinationLocationCity: string;
    personSeatCount: number;
    price: number,
    isTransportNeed: boolean,
    startAt: Date,
    createdAt: Date,
}