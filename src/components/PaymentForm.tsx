import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function PaymentForm() {
  const [value, setValue] = React.useState('bankkort');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    
    
    <React.Fragment>
      <FormControl component="fieldset">
      <FormLabel component="legend">Välj betalsätt</FormLabel>
      <RadioGroup aria-label="payment" name="payment1" value={value} onChange={handleChange}>
        <FormControlLabel value="bankkort" control={<Radio color="primary" />} label="Bankkort" />
        <FormControlLabel value="swish" control={<Radio color="primary" />} label="Swish" />
        <FormControlLabel value="faktura" control={<Radio color="primary" />} label="Faktura" />
      </RadioGroup>

    </FormControl>
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Kom ihåg kortuppgifter till nästa gång"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}