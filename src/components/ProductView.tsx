import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import  { productList } from './ProductList'
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

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
      <Box pt={5}>
        <Grid container spacing={3}>
          {productList.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={ index }>
              <Link style={linkStyle} to={product.url}>
                <ProductCard product={product}/> 
              </Link>
            </Grid>
          ), )}
        </Grid>
      </Box>
        
      </Container>
    </div>
  );
}

const linkStyle: CSSProperties = {
  textDecoration: 'none'
}