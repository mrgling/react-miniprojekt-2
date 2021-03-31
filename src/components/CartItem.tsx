import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CartContext, CartProduct, } from './contexts/CartContext';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    media: {
      height: 50,
      width: 50,
      borderRadius: '3rem'
    },
    deleteIcon: {
      margin: '0'
    },
    iconButton: {
      margin: '0',
      padding: '0'
    },
    container: {
      borderBottom: '0.1rem solid lightgrey',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }   
  }),
);
interface Props {
  product: CartProduct;
}

export default function CartItem(props: Props) {
  const classes = useStyles();
  const cart = useContext(CartContext);
  const { name, img, price, url, quantity} = props.product;
  const productUrl = `/produkt/${url}`;

  const increaseQuantityInCart = () => {
    cart.increaseQuantity(url)
  }

  const decreaseQuantityInCart = () => {
    cart.decreaseQuantity(url)
  }

  function priceForItems() {
    let total = 0;
      const subtotal = price * quantity;
      total += subtotal;  
    return total;
  }  

  const totItemPrice = priceForItems();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={3} sm={2} className={classes.gridItem}>
          <CardMedia className={classes.media} image={img} component={Link} to={productUrl} />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.gridItem}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Grid item xs={3} sm={2} className={classes.gridItem}>
          <Typography style={{ fontWeight: 'bold' }}> {totItemPrice} kr </Typography>
        </Grid>
        <Grid item xs={4} sm={2} className={classes.gridItem}>
          <Typography variant="body1">{price} kr/st</Typography>
        </Grid>
        <Grid item xs={6} sm={2} className={classes.gridItem}>
          <ButtonGroup>
            <Button aria-label="reduce" onClick={decreaseQuantityInCart}>
              <RemoveIcon fontSize="small" />
            </Button>
            <Button aria-label="increase" onClick={increaseQuantityInCart}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <Badge color="secondary" badgeContent={quantity}>
          </Badge>
        </Grid>
        <Grid item xs={2} sm={1} className={classes.gridItem}>
          <IconButton className={classes.iconButton} edge="end" aria-label="delete" onClick={() => cart.removeFromCart(props.product)}>
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}