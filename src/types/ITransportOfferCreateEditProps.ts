import { ITransportOffer } from "../dto/ITransportOffer"
import { ITransportOfferValidationProps } from "./ITransportOfferValidationProps"

export type ITransportOfferCreateEditProps = {
    transportOffer: ITransportOffer,
    errors: ITransportOfferValidationProps,
    setTransportOffer: (transportOffer: ITransportOffer) => void,
}