import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { productList } from './ProductList';
import ProductDetailCard from './ProductDetailCard';

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

//interface Props extends RouteComponentProps<{ name: string }> {}

export default function ProductDetail() {
  const classes = useStyles();
  const { params } = useRouteMatch<{ url: string }>();

  const product = productList.find(p => p.url === params.url);

  // condition ? whentrue : whenfalse
  // if (condition) { whentrue } else { whenfalse }

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Box pt={5}>
          {!product ? (
            <div>
              "Hoppsan! Det verkar som att denna sida försvunnit."
            </div>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <ProductDetailCard product={product} />
                </Paper>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
}