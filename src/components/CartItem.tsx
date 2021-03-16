// import React, { useState } from 'react';
import React, { CSSProperties, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Product } from './ProductList';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles({
  root: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 345,
  },
  media: {
    height: 200,
  }
});

interface Props {
    product: Product;
}


export default function CartItem(props: Props) {
  const classes = useStyles();
  const cart = useContext(CartContext)

  console.log(cart)
  const { name, img, price, url} = props.product;

  const [count, setCount] = React.useState(1);
 

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={url}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={props.product.name}
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
                {/* Box with cart item */}
                <Box m={3} p={3} style={itemStyle}>
                    <ButtonGroup>
                        <Button aria-label="reduce" onClick={() => { setCount(Math.max(count - 1, 0)); }}>
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button aria-label="increase" onClick={() => { setCount(count + 1); }}>
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                    <Badge color="secondary" badgeContent={count}>
                    </Badge>
                </Box>
            </CardActions>
        </Card>
    );
}

const itemStyle: CSSProperties = {
    color: 'red',
    display: 'flex',
    background: 'CornflowerBlue',
    alignItems: 'center',
    justifyContent: 'center',
}