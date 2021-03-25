import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Customer } from './CustomerForm';

export interface CardInfo {
    name?: string
    cardNumber?: string
    expireDate?: string
    cvv?: string
}
interface Props {
    customer: Customer
    cardInfo: CardInfo
    onCardInfoChange: (cardInfo: CardInfo) => void;
}

export function CardPayment(props:Props) {
    const {cardInfo, onCardInfoChange} = props
    const [nameError, setNameError] = useState<boolean>(false);
    const [cardNumberError, setCardNumberError] = useState<boolean>(false);
    const [expireDateError, setExpireDateError] = useState<boolean>(false);
    const [cvvError, setCvvError] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (/[a-ö][A-Ö]/.test(e.target.value)) {  
            setNameError(false);
           }
         else {
           setNameError(true);
         }

        onCardInfoChange({ ...cardInfo, name: e.target.value });
      };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (/^[0-9]{16}$/.test(e.target.value)) {  
            setCardNumberError(false);
           }
         else {
           setCardNumberError(true);
         }

        onCardInfoChange({ ...cardInfo, cardNumber: e.target.value });
      };

    const handleExpireDateChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (/^[0-9]{4}$/.test(e.target.value)) {  
            setExpireDateError(false);
           }
         else {
           setExpireDateError(true);
         }

        onCardInfoChange({ ...cardInfo, expireDate: e.target.value });
      };

    const handleCvvChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (/^[0-9]{3}$/.test(e.target.value)) {  
            setCvvError(false);
           }
         else {
           setCvvError(true);
         }

        onCardInfoChange({ ...cardInfo, cvv: e.target.value });
      };

      

    return(
        <>

            <Typography variant="h6" gutterBottom>
                Kortuppgifter
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField 
                        value={cardInfo.name}
                        onChange={handleNameChange}
                        required 
                        id="cardName" 
                        label="Namn på kort" 
                        fullWidth 
                        autoComplete="cc-name" 
                        helperText={nameError && "Fyll i kortinnehavarens namn"}
                        error={nameError}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        value={cardInfo.cardNumber}
                        onChange={handleCardNumberChange}
                        required
                        id="cardNumber"
                        label="Kortnummer"
                        fullWidth
                        autoComplete="cc-number"
                        helperText={cardNumberError && "Fyll i kortnummer"}
                        error={cardNumberError}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField 
                        value={cardInfo.expireDate}
                        onChange={handleExpireDateChange}
                        required 
                        id="expDate" 
                        label="Utgångsdatum" 
                        fullWidth 
                        autoComplete="cc-exp" 
                        helperText={expireDateError && "Fyll i kortets utgångsdatum"}
                        error={expireDateError}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        value={cardInfo.cvv}
                        onChange={handleCvvChange}
                        required
                        id="cvv"
                        label="CVV"
                        fullWidth
                        autoComplete="cc-csc"
                        helperText={cvvError && "Fyll i din tresiffriga säkerhetskod"}
                        error={cvvError}
                    />
                </Grid>
            </Grid>
        </>
    )
       
}

export function SwishPayment(props:Props) {
    return(
        <>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" gutterBottom>
                Swish
                </Typography>
                <Typography>
                    Mobilnummer {props.customer.phoneNumber}
                </Typography>
            </Grid>
        </>
    )
}

export function InvoicePayment(props:Props) {
    return(
        <>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" gutterBottom>
                Fakturaadress
                </Typography>
                <Typography>
                    {props.customer.firstName} {props.customer.lastName}
                </Typography>
                <Typography>
                    {props.customer.address} 
                </Typography>
                <Typography>
                    {props.customer.zip} {props.customer.city}
                </Typography>

            </Grid>
        </>
    )
}