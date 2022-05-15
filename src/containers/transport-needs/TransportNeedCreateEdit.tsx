import { Card, CardContent, Container } from "@mui/material";
import {
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import LocationCreateEdit from "../../components/LocationCreateEdit";
import TransportNeedMainCreateEdit from "../../components/TransportNeedMainCreateEdit";
import AddStepper from "../../components/stepper/AddStepper";
import TransportNeedCreateEditSummary from "../../components/TransportNeedCreateEditSummary";
import { CTransportNeeds } from "../../configuration";
import { AppContext } from "../../context/AppContext";
import { ILocation } from "../../dto/ILocation";
import { ITransportNeed } from "../../dto/ITransportNeed";
import { CreateInitialObjects } from "../../helpers/CreateInitialObjects";
import { ValidationInitializer } from "../../helpers/ValidationInitializer";
import {
  locationValidation,
  transportNeedValidation,
} from "../../helpers/Validator";
import { BaseService } from "../../services/BaseService";
import { ILocationValidationProps } from "../../types/ILocationValidationProps";
import { ITransportNeedValidationProps } from "../../types/ITransportNeedValidationProps";

const steps = ["Alguskoht", "Sihtkoht", "Üldandmed", "Üle vaatamine"];
const initialTransportNeed = CreateInitialObjects.initTransportNeed();
const initialTransportNeedErrors =
  ValidationInitializer.initialTransportNeedValidationState();
const initialLocationErrors =
  ValidationInitializer.initialLocationValidationState();

const getStepItem = (
  activeStep: number,
  transportNeed: ITransportNeed,
  startLocationErrors: ILocationValidationProps,
  destinationtLocationErrors: ILocationValidationProps,
  transportNeedErrors: ITransportNeedValidationProps,
  editStartLocation: (location: ILocation) => void,
  editDestinationLocation: (location: ILocation) => void,
  editTransportNeed: (transportNeed: ITransportNeed) => void
) => {
  console.log("Get step item");
  switch (activeStep) {
    case 0:
      return (
        <LocationCreateEdit
          location={transportNeed.startLocation}
          locationErrors={startLocationErrors}
          setLocation={editStartLocation}
        />
      );

    case 1:
      return (
        <LocationCreateEdit
          location={transportNeed.destinationLocation}
          locationErrors={destinationtLocationErrors}
          setLocation={editDestinationLocation}
        />
      );
    case 2:
      return (
        <TransportNeedMainCreateEdit
          errors={transportNeedErrors}
          transportNeed={transportNeed}
          setTransportNeed={editTransportNeed}
        />
      );
    default:
      return <TransportNeedCreateEditSummary transportNeed={transportNeed} />;
  }
};

const TransportNeedCreateEdit = () => {
  const appState = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (appState.auth.token === null) {
      navigate("/");
    }
  }, [appState]);

  const [activeStep, setActiveStep] = useState(0);
  const [transportNeed, setTransportNeed] = useState(initialTransportNeed);
  const [transportNeedErrors, setTransportNeedErrors] = useState(
    initialTransportNeedErrors
  );
  const [startLocationErrors, setStartLocationErrors] = useState(
    initialLocationErrors
  );
  const [destinationLocationErrors, setDestinationLocationErrors] = useState(
    initialLocationErrors
  );

  const editStartLocation = (location: ILocation): void => {
    setTransportNeed({ ...transportNeed, startLocation: location });
  };

  const editDestinationLocation = (location: ILocation): void => {
    setTransportNeed({ ...transportNeed, destinationLocation: location });
  };

  const editTransportNeed = (newTransportNeed: ITransportNeed): void => {
    setTransportNeed(newTransportNeed);
  };

  const setStep = (step: number) => {
    if (step > activeStep) {
      switch (step - 1) {
        case 0:
          const startLocationValidationResult = locationValidation(
            transportNeed.startLocation
          );
          setStartLocationErrors(startLocationValidationResult);

          if (!startLocationValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
        case 1:
          const destinationLocationValidationResult = locationValidation(
            transportNeed.destinationLocation
          );
          setDestinationLocationErrors(destinationLocationValidationResult);
          if (!destinationLocationValidationResult.anyError) {
            setActiveStep(step);
          }
          return;
        case 2:
          const transportNeedValidationResult =
            transportNeedValidation(transportNeed);

          setTransportNeedErrors(transportNeedValidationResult);
          if (!transportNeedValidationResult.anyError) {
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
      transportNeed,
      startLocationErrors,
      destinationLocationErrors,
      transportNeedErrors,
      editStartLocation,
      editDestinationLocation,
      editTransportNeed
    );
  }, [
    activeStep,
    transportNeed,
    startLocationErrors,
    destinationLocationErrors,
    transportNeedErrors,
    editStartLocation,
    editDestinationLocation,
    editTransportNeed,
  ]);

  const addItem = async () => {
    const transportNeedResult = await BaseService.post<ITransportNeed>(
      transportNeed,
      CTransportNeeds,
      appState.auth.token!
    );
    if (transportNeedResult.ok && transportNeedResult.data) {
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

export default TransportNeedCreateEdit;
