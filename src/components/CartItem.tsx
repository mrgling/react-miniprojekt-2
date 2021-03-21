import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CartContext, CartProduct, } from './contexts/CartContext';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    media: {
        height: 50,
        width: 50,
        marginRight: '1rem'
      },
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
        <div className={classes.demo}>
          <List>
            <ListItem>
              <CardMedia className={classes.media} image={img} component={Link} to={productUrl} />
              <ListItemText>
                {name}
              </ListItemText>
              <ListItemText>
                {price} kr/st
              </ListItemText>
              <ListItemText>
                <Typography style={{ fontWeight: 'bold' }}>
                  {totItemPrice} kr
                </Typography>
              </ListItemText>
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
              <IconButton edge="end" aria-label="delete" onClick={() => cart.removeFromCart(props.product)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </List>
        </div>
      </div>
    );
}