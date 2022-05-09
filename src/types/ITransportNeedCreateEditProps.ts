import { ITransportNeed } from "../dto/ITransportNeed"

export type ITransportNeedCreateEditProps = {
    transportNeed: ITransportNeed,
    setTransportNeed: (transportNeed: ITransportNeed) => void,
}