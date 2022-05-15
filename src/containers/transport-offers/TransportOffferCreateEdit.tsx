import { Card, CardContent, Container } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationCreateEdit from "../../components/LocationCreateEdit";
import AddStepper from "../../components/stepper/AddStepper";
import TransportOfferCreateEditSummary from "../../components/TransportOfferCreateEditSummary";
import TransportOfferMainCreateEdit from "../../components/TransportOfferMainCreateEdit";
import VehicleCreateEdit from "../../components/VehicleCreateEdit";
import { CTransportOffers } from "../../configuration";
import { AppContext } from "../../context/AppContext";
import { ILocation } from "../../dto/ILocation";
import { ITransportOffer } from "../../dto/ITransportOffer";
import { IVehicle } from "../../dto/IVehicle";
import { CreateInitialObjects } from "../../helpers/CreateInitialObjects";
import { ValidationInitializer } from "../../helpers/ValidationInitializer";
import {
  locationValidation,
  transportOfferValidation,
  vehicleValidation,
} from "../../helpers/Validator";
import { BaseService } from "../../services/BaseService";
import { ILocationValidationProps } from "../../types/ILocationValidationProps";
import { ITransportOfferValidationProps } from "../../types/ITransportOfferValidationProps";
import { IVehicleValidationProps } from "../../types/IVehicleValidationProps";

const steps = ["Alguskoht", "Sihtkoht", "Sõiduk", "Üldandmed", "Üle vaatamine"];
const initialTransportOffer = CreateInitialObjects.initTransportOffer();
const initialTransportOfferErrors =
  ValidationInitializer.initialTransportOfferValidationState();
const initialLocationErrors =
  ValidationInitializer.initialLocationValidationState();
const initialVehicleErrors =
  ValidationInitializer.initialVehicleValidationState();

const getStepItem = (
  activeStep: number,
  transportOffer: ITransportOffer,
  startLocationErrors: ILocationValidationProps,
  destinationtLocationErrors: ILocationValidationProps,
  vehicleErrors: IVehicleValidationProps,
  transportOfferErrors: ITransportOfferValidationProps,
  editStartLocation: (location: ILocation) => void,
  editDestinationLocation: (location: ILocation) => void,
  editVehicle: (vehicle: IVehicle) => void,
  editTransportOffer: (transportOffer: ITransportOffer) => void
) => {
  console.log("Get step item");
  switch (activeStep) {
    case 0:
      return (
        <LocationCreateEdit
          location={transportOffer.startLocation}
          locationErrors={startLocationErrors}
          setLocation={editStartLocation}
        />
      );

    case 1:
      return (
        <LocationCreateEdit
          location={transportOffer.destinationLocation}
          locationErrors={destinationtLocationErrors}
          setLocation={editDestinationLocation}
        />
      );
    case 2:
      return (
        <VehicleCreateEdit
          vehicle={transportOffer.vehicle}
          vehicleErrors={vehicleErrors}
          setVehicle={editVehicle}
        />
      );
    case 3:
      return (
        <TransportOfferMainCreateEdit
          errors={transportOfferErrors}
          transportOffer={transportOffer}
          setTransportOffer={editTransportOffer}
        />
      );
    default:
      return (
        <TransportOfferCreateEditSummary transportOffer={transportOffer} />
      );
  }
};
const TransportOfferCreateEdit = () => {
  const appState = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (appState.auth.token === null) {
      navigate("/");
    }
  }, [appState]);

  const [activeStep, setActiveStep] = useState(0);
  const [transportOffer, setTransportOffer] = useState(initialTransportOffer);
  const [transportOfferErrors, setTransportOfferErrors] = useState(
    initialTransportOfferErrors
  );
  const [startLocationErrors, setStartLocationErrors] = useState(
    initialLocationErrors
  );
  const [destinationLocationErrors, setDestinationLocationErrors] = useState(
    initialLocationErrors
  );
  const [vehicleErrors, setVehicleErrors] = useState(initialVehicleErrors);

  const editStartLocation = (location: ILocation): void => {
    setTransportOffer({ ...transportOffer, startLocation: location });
  };

  const editDestinationLocation = (location: ILocation): void => {
    setTransportOffer({ ...transportOffer, destinationLocation: location });
  };

  const editVehicle = (vehicle: IVehicle): void => {
    setTransportOffer({ ...transportOffer, vehicle: vehicle });
  };

  const editTransportOffer = (newTransportOffer: ITransportOffer): void => {
    setTransportOffer(newTransportOffer);
  };

  const setStep = (step: number) => {
    if (step > activeStep) {
      switch (step - 1) {
        case 0:
          const startLocationValidationResult = locationValidation(
            transportOffer.startLocation
          );
          setStartLocationErrors(startLocationValidationResult);

          if (!startLocationValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
        case 1:
          const destinationLocationValidationResult = locationValidation(
            transportOffer.destinationLocation
          );
          setDestinationLocationErrors(destinationLocationValidationResult);
          if (!destinationLocationValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
        case 2:
          const vehicleValidationResult = vehicleValidation(
            transportOffer.vehicle
          );
          setVehicleErrors(vehicleValidationResult);
          if (!vehicleValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
        case 3:
          const transportOfferValidationResult =
            transportOfferValidation(transportOffer);

          setTransportOfferErrors(transportOfferValidationResult);
          if (!transportOfferValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
      }

      return;
    } else {
      setActiveStep(step);
    }
  };

  const stepItem = useCallback(() => {
    return getStepItem(
      activeStep,
      transportOffer,
      startLocationErrors,
      destinationLocationErrors,
      vehicleErrors,
      transportOfferErrors,
      editStartLocation,
      editDestinationLocation,
      editVehicle,
      editTransportOffer
    );
  }, [
    activeStep,
    transportOffer,
    startLocationErrors,
    destinationLocationErrors,
    vehicleErrors,
    transportOfferErrors,
    editStartLocation,
    editDestinationLocation,
    editVehicle,
    editTransportOffer,
  ]);

  const addItem = async () => {
    const transportOfferResult = await BaseService.post<ITransportOffer>(
      transportOffer,
      CTransportOffers,
      appState.auth.token!
    );
    if (transportOfferResult.ok && transportOfferResult.data) {
      console.log("all added");
    }
  };

  return (
    <Container maxWidth="sm" component="div">
      <Card sx={{ my: 6 }}>
        <CardContent>
          <AddStepper
            steps={steps}
            stepItem={stepItem()}
            activeStep={activeStep}
            setActiveStep={setStep}
            submit={addItem}
            />
        </CardContent>
      </Card>
    </Container>
  );
};

export default TransportOfferCreateEdit;
