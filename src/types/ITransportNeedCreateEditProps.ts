import { ITransportNeed } from "../dto/ITransportNeed"
import { ITransportNeedValidationProps } from "./ITransportNeedValidationProps"

export type ITransportNeedCreateEditProps = {
    transportNeed: ITransportNeed,
    errors: ITransportNeedValidationProps,
    setTransportNeed: (transportNeed: ITransportNeed) => void,
}