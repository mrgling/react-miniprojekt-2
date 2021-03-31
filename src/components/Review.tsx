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
import CircularProgress from '@material-ui/core/CircularProgress';
import { CardInfo } from './CardPayment';

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  customer: Customer;
  paymentOption: string;
  shippingOption: string;
  isLoading: boolean;
  cardInfo: CardInfo;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
    padding: theme.spacing(1, 0),
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props: Props) {
  const classes = useStyles();
  const {customer, paymentOption, isLoading, cardInfo} = props;
  const {cart} = useContext(CartContext)

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

  function calculateTotalPrice() {
    let total = 0;
    cart.forEach(item => { 
      const subtotal = item.price * item.quantity;
      total += subtotal;  
    });
    total += shippingPrice
    return total;
  }  
  const totalPrice = calculateTotalPrice();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Beställning
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} />
            <Typography variant="body1">{product.quantity} st à {product.price} kr</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem} >
            <ListItemText primary="Fraktkostnad" />
            <Typography variant="body1">{shippingPrice} kr</Typography>
          </ListItem>
        <ListItem className={classes.total}>
          <ListItemText primary="Att betala:" />
          <Typography variant="h6" className={classes.total}>
            {totalPrice} kr
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText />
          <Typography variant="body2">
            <i>(varav moms {Math.round(totalPrice * 0.2)} kr)</i>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dina uppgifter
          </Typography>
          <Typography gutterBottom>{customer.firstName} {customer.lastName}</Typography>
          <Typography gutterBottom>{customer.address}</Typography>
          <Typography gutterBottom>{customer.zip} {customer.city}</Typography>
          <br/>
          <Typography gutterBottom>{customer.phoneNumber}</Typography>
          <Typography gutterBottom>{customer.email}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Betalsätt
          </Typography>
          <Grid container>
            <Typography gutterBottom>{paymentOption}</Typography>
          </Grid>
          {paymentOption==="Bankkort" &&
            <Grid item>
              <Typography gutterBottom variant="body2">Namn: {cardInfo.name}</Typography>
              <Typography gutterBottom variant="body2">Kortnummer: {cardInfo.cardNumber!.substring(0,4)} XXXX XXXX XXXX</Typography>
              <Typography gutterBottom variant="body2">Utgångsdatum: {cardInfo.expireDate}</Typography>
              <Typography gutterBottom variant="body2">Säkerhetskod: XXX</Typography>
            </Grid>
          }
        </Grid>
        <Grid container justify="space-evenly"> 
          {isLoading ? (
             <CircularProgress /> 
            ) : (
              <>
                <Box m={1}>
                  <Button color="primary" onClick={props.handleBack}>
                    Tillbaka
                  </Button>
                </Box>
                <Box m={1}>
                  <Button variant="contained" color="primary" onClick={props.handleNext}>
                    Slutför köp
                  </Button>
                </Box>
              </>
            )}
        </Grid>
      </Grid>
    </React.Fragment>      
  );
}
             
