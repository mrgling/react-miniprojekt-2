// import React, { useState } from 'react';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from './ProductList';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  media: {
    height: 300,
  },
});

interface Props {
    product: Product;
}


export default function ProductDetailCard(props: Props) {
  const classes = useStyles();
  // const [isVisible, setIsVisible] = useState(true);
  // const [product, setProduct] = useState<Product>();
  const cart = useContext(CartContext)
  const { name, description, img, price} = props.product;

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pris: {price} kr
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-around">
            <Link to="/">
                <Button size="small" variant="contained" color="primary">
                    Tillbaka
                </Button>
            </Link>
            <Button 
                size="small" 
                variant="contained" 
                color="primary" 
                onClick={() => cart.addToCart(props.product)}>
                    Lägg i kundvagn
            </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}