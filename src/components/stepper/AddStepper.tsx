import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddSteperProps } from '../../types/AddStepperProps';

export default function AddStepper(props: AddSteperProps) {
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(props.activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(props.activeStep);
    }

    props.setActiveStep(props.activeStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    props.setActiveStep(props.activeStep - 1);
  };

  const handleReset = () => {
    props.setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {props.steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {props.activeStep === props.steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ m: 2 }} variant='h6' component={'h2'}>{props.steps[props.activeStep]}</Typography>
    
          {props.stepItem}
       
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={props.activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Tagasi
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={props.activeStep === props.steps.length - 1 ? props.submit : handleNext}>
              {props.activeStep === props.steps.length - 1 ? 'Lõpeta ja salvesta' : 'Järgmine'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
