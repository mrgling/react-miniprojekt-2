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

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<boolean>(false);
  const [zipError, setZipError] = useState<boolean>(false);
  const [cityError, setCityError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  // const [validationCheck, setValidationCheck] = useState<boolean>(false);
  
  function checkValidation() {
    if (customer.firstName?.length === 0) { 
      setFirstNameError(true)
    }
    if (customer.lastName?.length === 0) { 
        setLastNameError(true)
    }  	
    if (customer.address?.length === 0) { 
      setAddressError(true)
    }  	
    if (customer.zip?.length === 0) { 
    setZipError(true)
    }
    if (customer.city?.length === 0) { 
      setCityError(true)
    }
    if (customer.phoneNumber?.length === 0) { 
      setPhoneNumberError(true)
    }  	  	  	
    if (customer.email?.length === 0) { 
      setEmailError(true)
    }
  };

  const handleNext = () => {
    // kolla så att det inte finns några fel, om inte gå vidare

    checkValidation(); 
    
    if (firstNameError === false && lastNameError === false && addressError === false && zipError === false && cityError === false && phoneNumberError === false && emailError === false) { 
      // setValidationCheck(true);
      props.handleNext();
    }  	
    else {
      // setValidationCheck(false);
    }
    // if (validationCheck === true) {
    // }
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
     if (/[a-ö][A-Ö]/.test(e.target.value)) {  
       setFirstNameError(false);
      }
    else {
      setFirstNameError(true);
    }
      onCustomerChange({ ...customer, firstName: e.target.value });
  };
  
  const handleLastNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/[a-ö][A-Ö]/.test(e.target.value)) {  
      setLastNameError(false);
     }
    else {
     setLastNameError(true);
   }
    onCustomerChange({ ...customer, lastName: e.target.value });
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{3,}$/.test(e.target.value)) {  
      setAddressError(false);
     }
    else {
     setAddressError(true);
   }
    onCustomerChange({ ...customer, address: e.target.value });
  };
  
  const handleZipChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{5,6}$/.test(e.target.value)) {  
      setZipError(false);
     }
    else {
     setZipError(true);
   }
    onCustomerChange({ ...customer, zip: e.target.value });
  };
  
  const handleCityChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/[a-ö][A-Ö]/.test(e.target.value)) {  
      setCityError(false);
     }
    else {
     setCityError(true);
   }
    onCustomerChange({ ...customer, city: e.target.value });
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^07([0-9][ -]*){7}[0-9]$/.test(e.target.value)) {  
      setPhoneNumberError(false);
     }
    else {
     setPhoneNumberError(true);
   }
    onCustomerChange({ ...customer, phoneNumber: e.target.value });
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^\S+@\S+\.\S+$/.test(e.target.value)) {  
      setEmailError(false);
     }
    else {
     setEmailError(true);
   }
    onCustomerChange({ ...customer, email: e.target.value });
  };

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
            helperText="Fyll i ditt namn"
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
            // helperText={firstNameErrorText}
            error={lastNameError}
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
            // helperText={firstNameErrorText}
            error={addressError}
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
            // helperText={firstNameErrorText}
            error={zipError}
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
            // helperText={firstNameErrorText}
            error={cityError}
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
            // helperText={firstNameErrorText}
            error={phoneNumberError}
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
            // helperText={firstNameErrorText}
            error={emailError}
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
