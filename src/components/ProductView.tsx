import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import  { productList } from '../ProductList'
import ProductCard from './ProductCard';
import { Footer } from './Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ProductView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box pt={5} pb={0}>
          <Grid container spacing={3}>
            {productList.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                  <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Container>
    </div>
  );
}