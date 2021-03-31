import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Button, Grid, Typography } from '@material-ui/core';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  shippingOption: string
  onShippingChange: (shippingInfo: string) => void;
}

export default function Shipping(props: Props) {
  const { shippingOption, onShippingChange } = props
  
  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onShippingChange(event.target.value);
  };

  function calculateDeliveryDate(days: number) {
    let today = new Date();
    today.setDate(today.getDate() + (days));
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    let day = yyyy + '-' + mm + '-' + dd;
    return day;
  }
  
  return (   
      <React.Fragment>
        <FormControl component="fieldset">
          <FormLabel component="legend">Välj fraktsätt</FormLabel>
          <RadioGroup aria-label="shipping" name="shipping1" value={shippingOption} onChange={handleShippingChange}>
            <FormControlLabel value="postnord" control={<Radio color="primary" />} label="Postnord" />
            <Typography style={{ fontWeight: 600 }}>
              Fraktkostnad: 49 kr
            </Typography>
            <span>Leveransdatum: {calculateDeliveryDate(5)} (5 dagar)</span>
            <FormControlLabel value="ups" control={<Radio color="primary" />} label="UPS" />
            <Typography style={{ fontWeight: 600 }}>
              Fraktkostnad: 89 kr
            </Typography>
            <span>Leveransdatum: {calculateDeliveryDate(2)} (2 dagar)</span>
            <FormControlLabel value="dhl" control={<Radio color="primary" />} label="DHL" />
            <Typography style={{ fontWeight: 600 }}>
              Fraktkostnad: 149 kr
            </Typography>
            <span>Leveransdatum: {calculateDeliveryDate(1)} (1 dag)</span>
          </RadioGroup>
        </FormControl>
        <Grid container justify="space-evenly">
          <Box m={1}>
            <Button color="primary" onClick={props.handleBack}>
              Tillbaka
            </Button>
          </Box>
          <Box m={1}>
            <Button variant="contained" color="primary" onClick={props.handleNext}>
              Nästa
            </Button>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
          