import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from '../ProductList';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

interface Props {
    product: Product;
}

export default function ProductCard(props: Props) {
  const classes = useStyles();
  const cart = useContext(CartContext)
  const { name, img, price, url} = props.product;
  const productUrl = `/produkt/${url}`;
 
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={productUrl}>
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pris: {price} kr
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="flex-end">
          <Button size="small" variant="contained" color="primary" onClick={() => cart.addToCart(props.product)}>
            Lägg i kundvagn
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}