import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { Customer } from './CustomerForm';
import { CardPayment, SwishPayment } from './PaymentChoice';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  paymentOption: string;
  onPaymentOptionChange: (paymentOption: string) => void;
  customer: Customer;
}

export default function PaymentForm(props: Props) {

  const { paymentOption, onPaymentOptionChange } = props

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPaymentOptionChange(event.target.value);
  };

  const { customer } = props

  let paymentInfo;

  if (paymentOption==="bankkort") { 
    paymentInfo = <CardPayment/>
  }
  else {
    paymentInfo = <SwishPayment customer={customer} />
  }
  return (
    
    // Ett state med conditional rendering på radioknapparna här
    // (formcontrol)

    <React.Fragment>
      <FormControl component="fieldset">
      <FormLabel component="legend">Välj betalsätt</FormLabel>
      <RadioGroup aria-label="payment" name="payment1" value={paymentOption} onChange={handlePaymentChange}>
        <FormControlLabel value="bankkort" control={<Radio color="primary" />} label="Bankkort" />
        <FormControlLabel value="swish" control={<Radio color="primary" />} label="Swish" />
        <FormControlLabel value="faktura" control={<Radio color="primary" />} label="Faktura" />
      </RadioGroup>

    </FormControl>

      {paymentInfo}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <div >
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleBack}
          >
            Tillbaka
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Nästa
          </Button>
        </div>

        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Kom ihåg kortuppgifter till nästa gång"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}