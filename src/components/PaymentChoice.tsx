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



    const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // validera
        // if (/[0-9][A-Ö]/.test(e.target.value)) {}
        onCardInfoChange({ ...cardInfo, name: e.target.value });
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
                        autoComplete="cc-name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Kortnummer"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Utgångsdatum" fullWidth autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Skriv in din tresiffriga säkerhetskod "
                        fullWidth
                        autoComplete="cc-csc"
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