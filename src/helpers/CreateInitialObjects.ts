import { ILocation, ILocationAdd } from "../dto/ILocation";
import { ITransport, ITransportAdd } from "../dto/ITransport";
import { ITransportNeed} from "../dto/ITransportNeed";
import { ITransportOffer} from "../dto/ITransportOffer";
import { IVehicle } from "../dto/IVehicle";

export class CreateInitialObjects {
    static initLocation(): ILocation {
        console.log('init location');
        return {
            country: "",
            province: undefined,
            city: "",
            address: "",
            description: undefined
        }
    }

    static initLocationAdd(): ILocationAdd {
        return {
            country: "",
            city: "",
            address: "",
            locationInfo: undefined
        }
    }

    static initTransportNeed(): ITransportNeed {
        return {
            id: "",
            startLocation: this.initLocation(),
            destinationLocation: this.initLocation(),
            description: undefined,
            startAt: null,
            personCount: 0,
            price: undefined,
            isAd: true,
        }
    }

    static initTransportOffer(): ITransportOffer {
        return {
            id: "",
            startLocation: this.initLocation(),
            destinationLocation: this.initLocation(),
            vehicle: this.initVehicle(),
            description: undefined,
            startAt: null,
            availableSeatCount: 0,
            price: undefined,
            isAd: true
        }
    }

    static initVehicle(): IVehicle {
        return {
            make: undefined,
            model: undefined,
            number: ""
        }
    }

    // static initTransport(): ITransport {
    //     return {
    //         id: "",
    //         transportStatus: undefined,
    //         finalPrice: 0,
    //         pickUpTime: "",
    //         estimatedDeliveryTime: "",
    //         deliveredTime: "",
    //         pickUpLocation: this.initLocation(),
    //         transportNeedId: "",
    //         transportOfferId: ""
    //     }
    // }

    // static initTransportAdd(): ITransportAdd {
    //     return {
    //         transportStatus: 1,
    //         finalPrice: 0,
    //         pickUpTime: "",
    //         estimatedDeliveryTime: undefined,
    //         deliveredTime: undefined,
    //         pickUpLocationId: "",
    //         transportNeedId: "",
    //         transportOfferId: ""
    //     }
    // }
    // static initTransportOfferAdd(): ITransportOfferAdd {
    //     return {
    //         transportOfferInfo: "",
    //         transportType: undefined,
    //         price: 0,
    //         availableLoadCapacity: 0,
    //         freeSeats: 0,
    //         transportMetaId: undefined,
    //         vehicleId: undefined,
    //         trailerId: undefined,
    //         unitId: undefined
    //     }
    // }

    // static initTransportOffer(): ITransportOffer {
    //     return {
    //         id: "",
    //         transportOfferInfo: "",
    //         transportType: 1,
    //         price: 0,
    //         availableLoadCapacity: 0,
    //         freeSeats: 0,
    //         transportMeta: this.initTransportMeta(),
    //         appUserId: "",
    //         vehicle: this.initVehicle(),
    //         trailer: null,
    //         unit: this.initUnit()
    //     }
    // }
}