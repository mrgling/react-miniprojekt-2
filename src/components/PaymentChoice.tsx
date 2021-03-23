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

export function CardPayment() {
    return(
        <>

            <Typography variant="h6" gutterBottom>
                Kortuppgifter
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Namn på kort" fullWidth autoComplete="cc-name" />
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

interface Props {
    customer: Customer
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