import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormOne from './Foam1'
import FormTwo from './Foam2'
import FormThree from './Foam3'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  
  },
}));

function getSteps() {
  return ['Form 1 out of 3', 'Form 2 out of 3', 'Form 3 out of 3'];
}

function getStepContent(stepIndex:number,handleNext: () => void) {
  switch (stepIndex) {
    case 0:
      return <FormOne handleNext={handleNext}/>;
    case 1:
      return <FormTwo handleNext={handleNext}/>;
    case 2:
      return <FormThree handleNext={handleNext}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperComponent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
      console.log("Clicking Next")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography style={{margin:"20px",fontWeight:"bold"}} className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset} style={{ padding: "10px", width: "20%" }} type="submit" variant="contained" color="primary">Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext)}</Typography>
          
          </div>
        )}
      </div>
    </div>
  );
}
