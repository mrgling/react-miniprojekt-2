import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

interface Props {
  handleNext: () => void;
  handleAddressInfo: () => void;
}

export interface Address {
  firstName?: string
  lastName?: string
  address?: string
  zip?: number
  city?: string
  phoneNumber?: number
  email?: string
}

export default function AddressForm(props: Props) {
  const [customer, setCustomer] = useState<Address>({})

  const handleNext = () => {
    //aksdasdaghs
    props.handleNext();
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    setCustomer({ ...customer, firstName: e.target.value });
  };

  console.log(customer);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Leveransadress
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={"state.firstName"}
            onChange={handleFirstNameChange}
            required
            id="firstName"
            name="firstName"
            label="Förnamn"
            fullWidth
            autoComplete="given-name"
            // helperText={state.firstNameError}
            // error={Boolean(state.firstNameError)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Efternamn"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Gatuadress"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postnummer"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ort"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phonenumber"
            label="Mobilnummer"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-post"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Använd dessa uppgifter för betalningsdetaljer"
          />
        </Grid>
        <Grid item xs={12}>
        <div >
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Nästa
          </Button>
        </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
