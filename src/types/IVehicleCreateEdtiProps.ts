import { IVehicle } from "../dto/IVehicle";
import { IVehicleValidationProps } from "./IVehicleValidationProps";

export type IVehicleCreateEditProps = {
    vehicle: IVehicle, 
    vehicleErrors: IVehicleValidationProps,
    setVehicle: (vehicle: IVehicle) => void
}