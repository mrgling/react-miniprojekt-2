import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Customer } from './CustomerForm';

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