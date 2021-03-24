import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Box, Button } from '@material-ui/core';
import { CartContext } from './contexts/CartContext';
import { Customer } from './CustomerForm';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  customer: Customer;
  paymentOption: string;
  shippingOption: string;
}

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props: Props) {
  const classes = useStyles();

  const {cart} = useContext(CartContext)
  //const totalPrice = cart.reduce((total, { price = 0 }) => total + price, 0);

  function priceFunc() {
    let total = 0;
    cart.forEach(item => { 
      const subtotal = item.price * item.quantity;
      total += subtotal;  
    });
    return total;
  }  

  const totalPrice = priceFunc();

  function calculateShippingPrice() {
    let price;
    if(props.shippingOption==='postnord') {
       price = 49;
    }
    else if(props.shippingOption==='dhl') {
        price = 149;
    }
    else {
        price = 89;
    }
    return price;
  }
  const shippingPrice = calculateShippingPrice();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography variant="body2">{product.quantity} st à {product.price} kr</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem} >
            <ListItemText primary="Fraktkostnad:" />
            <Typography variant="body2">{shippingPrice} kr</Typography>
          </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid container justify="space-evenly">
          <Box m={2}>
            <Button color="primary" onClick={props.handleBack}>
              Tillbaka
          </Button>
            <Button variant="contained" color="primary" onClick={props.handleNext}>
              Slutför köp
          </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
             
