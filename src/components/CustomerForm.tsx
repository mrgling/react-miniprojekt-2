import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';

interface Props {
  handleNext: () => void;
  customer: Customer;
  onCustomerChange: (customer: Customer) => void;
}

export interface Customer {
  firstName?: string
  lastName?: string
  address?: string
  zip?: string
  city?: string
  phoneNumber?: string
  email?: string
}

export default function CustomerForm(props: Props) {
  const { customer, onCustomerChange } = props

  const [firstNameError, setFirstNameError] = useState<boolean>(true);

  const handleNext = () => {
    // kolla så att det inte finns några fel, om inte gå vidare
    // userValidation
    props.handleNext();
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
     if (/[a-ö][A-Ö]/.test(e.target.value)) {  
       setFirstNameError(false);
      }
    else {
      setFirstNameError(true);
    }
      onCustomerChange({ ...customer, firstName: e.target.value });
  };
  
  const handleLastNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, lastName: e.target.value });
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, address: e.target.value });
  };
  
  const handleZipChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, zip: e.target.value });
  };
  
  const handleCityChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, city: e.target.value });
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, phoneNumber: e.target.value });
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    // validera
    // if (/[0-9][A-Ö]/.test(e.target.value)) {}
    onCustomerChange({ ...customer, email: e.target.value });
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
            value={customer.firstName}
            onChange={handleFirstNameChange}
            required
            id="firstName"
            name="firstName"
            label="Förnamn"
            fullWidth
            autoComplete="given-name"
            // helperText={firstNameErrorText}
            error={firstNameError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.lastName}
            onChange={handleLastNameChange}
            required
            id="lastName"
            name="lastName"
            label="Efternamn"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.address}
            onChange={handleAddressChange}
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
            value={customer.zip}
            onChange={handleZipChange}
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
            value={customer.city}
            onChange={handleCityChange}
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
            value={customer.phoneNumber}
            onChange={handlePhoneNumberChange}
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
            value={customer.email}
            onChange={handleEmailChange}
            required
            id="email"
            name="email"
            label="E-post"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Använd dessa uppgifter för betalningsdetaljer"
          />
        </Grid> */}
        <Grid container justify="space-evenly">
          <Box m={2}>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Nästa
          </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
