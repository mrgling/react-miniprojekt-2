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
  shippingInfo: ShippingInfo;
  onShippingChange: (shippingInfo: ShippingInfo) => void;
}

export interface ShippingInfo {
  agent: string;
  shippingPrice: string;
  shippingDate: string;
}

export default function Shipping(props: Props) {
  const [value, setValue] = React.useState('postnord');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(event.target.value);
  };

  return (
   
      
    <FormControl component="fieldset">
      <FormLabel component="legend">Välj fraksätt</FormLabel>
      <RadioGroup aria-label="shipping" name="shipping1" value={value} onChange={handleChange}>
        <FormControlLabel value="postnord" control={<Radio color="primary" />} label="Postnord" />
        <span> Fraktkostnad: 49 kr Leveranstid: 5 vardagar</span>
        <FormControlLabel value="ups" control={<Radio color="primary" />} label="UPS" />
        <span> Fraktkostnad: 89 kr Leveranstid: 2 vardagar</span>
        <FormControlLabel value="dhl" control={<Radio color="primary" />} label="DHL" />
        <span> Fraktkostnad: 149 kr Leveranstid: 1 vardagar</span>
      </RadioGroup>
      <div >
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleNext}
          >
            Nästa
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={props.handleBack}
          >
            Tillbaka
          </Button>
        </div>
    </FormControl>
    
    );
  }
  

