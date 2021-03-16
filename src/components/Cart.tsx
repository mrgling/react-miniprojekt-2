import React, { CSSProperties, useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import CartItem from './CartItem';
import { Copyright } from './Checkout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: 'linear-gradient(20deg, rgb(230, 230, 230), white)',
        boxShadow: '0 6px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 20%)'
      },
  }),
);

export default function FullWidthGrid() {
  const classes = useStyles();
  const cart = useContext(CartContext)

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box pt={3} pb={1}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography>
                  <h1>Kundvagn</h1>
                </Typography>
                <Box pt={0} pb={0} style={{ border: '1px solid black' }}>
                  {cart.cart.map((product, index) => (
                    <CartItem product={product} />
                  ))}
                </Box>
                <Typography style={{ background: 'azure' }}>
                  <h2>Summa:</h2>
                </Typography>
                <Box m={0} pt={0}>
                  <Grid container justify="space-evenly">
                    <Box m={1}>
                      <Link style={linkStyle} to="/">
                        <Button variant="contained" color="primary">Tillbaka</Button>
                      </Link>
                    </Box>
                    <Box m={1}>
                      <Link style={linkStyle} to="/checkout">
                        <Button variant="contained" color="primary">Gå till kassan</Button>
                      </Link>
                    </Box>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Box pt={2} pb={2}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

const linkStyle: CSSProperties = {
    textDecoration: 'none'
}