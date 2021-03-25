import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Button } from '@material-ui/core';
import { InvoicePayment, SwishPayment } from './PaymentChoice';
import CardPayment, { CardInfo } from './CardPayment'
import { Customer } from './CustomerForm';

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
  const [nameError, setNameError] = useState<boolean>(false);
  const [cardNumberError, setCardNumberError] = useState<boolean>(false);
  const [expireDateError, setExpireDateError] = useState<boolean>(false);
  const [cvvError, setCvvError] = useState<boolean>(false);

  function isAllRequiredFieldsOk() {
    return (
      cardInfo.name
      && cardInfo.cardNumber
      && cardInfo.expireDate
      && cardInfo.cvv
    )
  }
  
  function isFormValid() {
    return (
      isAllRequiredFieldsOk()
      && !nameError
      && !cardNumberError
      && !expireDateError
      && !cvvError
    )
  }
  const { paymentOption, onPaymentOptionChange } = props

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPaymentOptionChange(event.target.value);
  };

  const { customer, cardInfo, onCardInfoChange } = props

  let paymentInfo;

  if (paymentOption==="Bankkort") { 
    paymentInfo = <CardPayment 
      customer={customer} 
      cardInfo={cardInfo} 
      onCardInfoChange={onCardInfoChange}
      nameError={nameError}
      setNameError={setNameError}
      cardNumberError= {cardNumberError}
      setCardNumberError={setCardNumberError}
      expireDateError= {expireDateError}
      setExpireDateError={setExpireDateError}
      cvvError= {cvvError}
      setCvvError={setCvvError}

      />
  }
  else if (paymentOption==="Swish"){
    paymentInfo = <SwishPayment customer={customer} />
  }
  else {
    paymentInfo = <InvoicePayment customer={customer} />
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

      <Grid container justify="space-evenly">
        <Box m={2}>
          <Button color="primary" onClick={props.handleBack}>
            Tillbaka
          </Button>
          <Button disabled={!isFormValid()} variant="contained" color="primary" onClick={props.handleNext}>
            Nästa
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
}

