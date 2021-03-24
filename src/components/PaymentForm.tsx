import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Button } from '@material-ui/core';
import { Customer } from './CustomerForm';
import { CardInfo, CardPayment, InvoicePayment, SwishPayment } from './PaymentChoice';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  paymentOption: string;
  onPaymentOptionChange: (paymentOption: string) => void;
  customer: Customer;
  cardInfo: CardInfo;
  onCardInfoChange: (cardInfo: CardInfo) => void;
}

export default function PaymentForm(props: Props) {

  const { paymentOption, onPaymentOptionChange } = props

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPaymentOptionChange(event.target.value);
  };

  const { customer, cardInfo, onCardInfoChange } = props

  let paymentInfo;

  if (paymentOption==="Bankkort") { 
    paymentInfo = <CardPayment customer={customer} cardInfo={cardInfo} onCardInfoChange={onCardInfoChange}/>
  }
  else if (paymentOption==="Swish"){
    paymentInfo = <SwishPayment customer={customer} cardInfo={cardInfo} onCardInfoChange={onCardInfoChange}/>
  }
  else {
    paymentInfo = <InvoicePayment customer={customer} cardInfo={cardInfo} onCardInfoChange={onCardInfoChange}/>
  }
  return (
    
    // Ett state med conditional rendering på radioknapparna här
    // (formcontrol)

    <React.Fragment>
      <FormControl component="fieldset">
      <FormLabel component="legend">Välj betalsätt</FormLabel>
      <RadioGroup aria-label="payment" name="payment1" value={paymentOption} onChange={handlePaymentChange}>
        <FormControlLabel value="Bankkort" control={<Radio color="primary" />} label="Bankkort" />
        <FormControlLabel value="Swish" control={<Radio color="primary" />} label="Swish" />
        <FormControlLabel value="Faktura" control={<Radio color="primary" />} label="Faktura" />
      </RadioGroup>

    </FormControl>

      {paymentInfo}
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Kom ihåg kortuppgifter till nästa gång"
          />
        </Grid> */}
      </Grid>
      <Grid container justify="space-evenly">
        <Box m={2}>
          <Button color="primary" onClick={props.handleBack}>
            Tillbaka
          </Button>
          <Button variant="contained" color="primary" onClick={props.handleNext}>
            Nästa
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}