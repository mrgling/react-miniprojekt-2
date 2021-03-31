import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { Product } from '../ProductList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    media: {
      height: 300
    },
    buttonBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around'
    },
  }),
);

export default function ProductDetail() {
  const productList = JSON.parse(localStorage.getItem('productList')!);
  const classes = useStyles();
  const { params } = useRouteMatch<{ url: string }>();
  const cart = useContext(CartContext);
  const product = productList.find((p: Product) => p.url === params.url);

  return (
    <Container maxWidth="sm">
      <Box py={5}>
        {!product ? (
          <div className={classes.root}>
            <Typography gutterBottom variant="h4">
              Hoppsan! Det verkar som att denna sida har försvunnit.
            </Typography>
            <Link to="/">
              <Button size="small" variant="contained" color="primary">
                Gå till startsidan
              </Button>
            </Link>
          </div>
        ) : (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.img}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h4">
                  {product.name}
                </Typography>
                <Typography paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6">
                  Pris: {product.price} kr
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box py={2} className={classes.buttonBox}>
              <Link style={{ textDecoration: 'none' }} to="/">
                <Button
                  size="small"
                  color="primary">
                  Tillbaka
                </Button>
              </Link>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => cart.addToCart(product)}>
                Lägg i kundvagn
              </Button>
            </Box>
          </Card>
        )}
      </Box>
    </Container>
  );
}