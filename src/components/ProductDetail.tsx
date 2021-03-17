import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';
import { productList } from './ProductList';
import { CartContext } from './contexts/CartContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary,

    },
    media: {
      height: 300,
      maxWidth: 500,
      justifyContent: 'center'
    },
  }),
);

//interface Props extends RouteComponentProps<{ name: string }> {}

export default function ProductDetail() {
  const classes = useStyles();
  const { params } = useRouteMatch<{ url: string }>();
  const cart = useContext(CartContext);
  const product = productList.find(p => p.url === params.url);

  // condition ? whentrue : whenfalse
  // if (condition) { whentrue } else { whenfalse }

  return (
    <Container maxWidth="md">   
      <Box pt={5} pb={5}>   
        {!product ? (
          <div>
            "Hoppsan! Det verkar som att denna sida försvunnit."
          </div>
      ) : (

            // <Paper className={classes.paper}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height= "300"
                    image={product.img}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Pris: {product.price} kr
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
                          onClick={() => cart.addToCart(product)}>
                              Lägg i kundvagn
                      </Button>
                  </Grid>
                </CardActions>
              </Card>
            // </Paper>

          )}
        </Box> 
      </Container>
  );
}