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
}

  export default function Shipping(props: Props) {
  const [value, setValue] = React.useState('postnord');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
   
      
    <FormControl component="fieldset">
      <FormLabel component="legend">Välj fraksätt</FormLabel>
      <RadioGroup aria-label="shipping" name="shipping1" value={value} onChange={handleChange}>
        <FormControlLabel value="postnord" control={<Radio color="primary" />} label="Postnord" />
        <span> Fraktkostnad: 200 kr Leveranstid: 1-2 vardagar</span>
        <FormControlLabel value="dhl" control={<Radio color="primary" />} label="DHL" />
        <span> Fraktkostnad: 129 kr Leveranstid: 3-4 vardagar</span>
        <FormControlLabel value="ups" control={<Radio color="primary" />} label="UPS" />
        <span> Fraktkostnad: 75 kr Leveranstid: 6-7 vardagar</span>
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

