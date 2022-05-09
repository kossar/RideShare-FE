export interface ILocation {
    id?: string;
    country: string | undefined;
    province: string | undefined;
    city: string;
    address: string;
    description: string | undefined;

}

export interface ILocationAdd{
    country: string;
    city: string;
    address: string;
    locationInfo: string | undefined;

}