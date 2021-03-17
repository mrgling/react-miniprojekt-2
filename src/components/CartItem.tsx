import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { Product } from './ProductList';

import CardMedia from '@material-ui/core/CardMedia';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Avatar from '@material-ui/core/Avatar';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Grid from '@material-ui/core/Grid';
// import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
      // maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    media: {
        height: 50,
        width: 50
      },
  }),
);

// const useStyles = makeStyles({
//   root: {
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: 345,
//   },
//   media: {
//     height: 200,
//   }
// });

interface Props {
    product: Product;
}

// function generate(element: React.ReactElement) {
//     return [0, 1, 2].map((value) =>
//       React.cloneElement(element, {
//         key: value,
//       }),
//     );
//   }


export default function CartItem(props: Props) {
  const classes = useStyles();
  const cart = useContext(CartContext)

  const { name, img, price, url} = props.product;

  const [count, setCount] = React.useState(1); 

  const productUrl = `/produkt/${url}`;

    return (
      <div className={classes.root}>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <CardMedia className={classes.media} image={img} component={Link} to={productUrl}/>
              <ListItemText>
                {name}
              </ListItemText>
              <ListItemText>
                {price} kr
              </ListItemText>
              <Box m={0} p={0}>
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
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => cart.removeFromCart(props.product) }>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </div>
    );
}

// export default function CartItem(props: Props) {
//   const classes = useStyles();
//   const cart = useContext(CartContext)

//   console.log(cart)
//   const { name, img, price, url} = props.product;

//   const [count, setCount] = React.useState(1);
 

//     return (
//         <Card className={classes.root}>
//             <CardActionArea component={Link} to={url}>
//                 <CardMedia
//                     className={classes.media}
//                     image={img}
//                     title={props.product.name}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                         {name}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Pris: {price} kr
//           </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 {/* Box with cart item */}
//                 <Box m={3} p={3} style={itemStyle}>
//                     <ButtonGroup>
//                         <Button aria-label="reduce" onClick={() => { setCount(Math.max(count - 1, 0)); }}>
//                             <RemoveIcon fontSize="small" />
//                         </Button>
//                         <Button aria-label="increase" onClick={() => { setCount(count + 1); }}>
//                             <AddIcon fontSize="small" />
//                         </Button>
//                     </ButtonGroup>
//                     <Badge color="secondary" badgeContent={count}>
//                     </Badge>
//                 </Box>
//             </CardActions>
//         </Card>
//     );
// }

// const itemStyle: CSSProperties = {
//     color: 'red',
//     display: 'flex',
//     background: 'CornflowerBlue',
//     alignItems: 'center',
//     justifyContent: 'center',
// }