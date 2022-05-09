import { ILocation } from "../dto/ILocation";

export type ILocationCreateEditProps = {
    location: ILocation, 
    setLocation: (location: ILocation) => void
}