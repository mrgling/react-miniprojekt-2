// import React, { useState } from 'react';
import React from 'react';
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

const useStyles = makeStyles({
  root: {
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
  // const [isVisible, setIsVisible] = useState(true);
  // const [product, setProduct] = useState<Product>();
  
  const { name, img, price } = props.product;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
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
        {/* <Button size="small" color="primary" onClick={() => setIsVisible(false)}>
          Share
        </Button> */}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button size="small" variant="contained" color="primary">
            Lägg i kundvagn
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}