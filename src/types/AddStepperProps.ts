export type AddSteperProps = {
    steps: Array<string>, 
    stepItem: JSX.Element,
    activeStep: number,
    setActiveStep: (step: number) => void;
    submit: () => Promise<void>,
  }