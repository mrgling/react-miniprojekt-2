import React, { CSSProperties, useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const cart = useContext(CartContext)

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box pt={5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h1>Kundvagn</h1>
                  {cart.cart.map((product, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                <Link style={linkStyle} to="/checkout">
                  <Button variant="contained" color="primary">Checkout</Button>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

const linkStyle: CSSProperties = {
    textDecoration: 'none'
}