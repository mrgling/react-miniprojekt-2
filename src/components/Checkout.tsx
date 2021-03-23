import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CustomerForm, { Customer } from './CustomerForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Shipping from './Shipping';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Marsvinstema
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    justifyContent: 'center',
    alignItems: 'center',    
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Dina uppgifter', 'Fraktsätt', 'Betalsätt', 'Granska din beställning'];

// skapa ett state som representerar ordern
// i nästa steg ta emot statet

// statet ska ligga i denna komponenten
// 3 objekt som vi uppdaterar med setState

// efter review printa ut mockade api
// console logga detta

// nästa/submit bör ligga i sina respektive komponenter för att setta statet




export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressInfo, setAddressInfo] = React.useState('address');
  const [shippingOption, setShippingOption] = React.useState('postnord');
  const [customer, setCustomer] = React.useState<Customer>({  firstName: '', lastName: '', address: '', zip: '',  city: '', phoneNumber: '', email: ''})
  // const [shippingInfo, setShippingInfo] = React.useState<ShippingInfo>({  agent: '', shippingPrice: '', shippingDate: ''})
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleAddressInfo = () => {
    setAddressInfo('address')
  }
  
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CustomerForm handleNext={handleNext} customer={customer} onCustomerChange={setCustomer} />;
      case 1:
        return <Shipping handleNext={handleNext} handleBack={handleBack} shippingOption={shippingOption} onShippingChange={setShippingOption}/>;
      case 2:
          return <PaymentForm handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Review handleNext={handleNext} handleBack={handleBack} />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  console.log(shippingOption);
  
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Kassa
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} orientation={'vertical'}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Tack för din order.
                </Typography>
                <Typography variant="subtitle1">
                  Ditt ordernummer är #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {/* <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Tillbaka
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Slutför köp' : 'Nästa'}
                  </Button>
                </div> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>


);
}