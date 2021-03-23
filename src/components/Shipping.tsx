import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

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

  return (   
      
    <FormControl component="fieldset">
      <FormLabel component="legend">Välj fraksätt</FormLabel>
      <RadioGroup aria-label="shipping" name="shipping1" value={shippingOption} onChange={handleShippingChange}>
        <FormControlLabel value="postnord" control={<Radio color="primary" />} label="Postnord" />
        <span> Fraktkostnad: 49 kr Leveranstid: 5 dagar</span>
        <FormControlLabel value="ups" control={<Radio color="primary" />} label="UPS" />
        <span> Fraktkostnad: 89 kr Leveranstid: 2 dagar</span>
        <FormControlLabel value="dhl" control={<Radio color="primary" />} label="DHL" />
        <span> Fraktkostnad: 149 kr Leveranstid: 1 dag</span>
      </RadioGroup>
      <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleBack}
          >
            Tillbaka
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Nästa
          </Button>
        </div>
    </FormControl>    
    );
  }
  

