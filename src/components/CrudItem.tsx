import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { Product } from '../ProductList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    media: {
      height: 50,
      width: 50,
      borderRadius: '3rem'
    },
    deleteIcon: {
      margin: '0'
    },
    iconButton: {
      margin: '0 1rem',
      padding: '0'
    },
    container: {
      borderTop: '0.1rem solid lightgrey',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',  
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
  }),
);
interface Props {
  product: Product;
  removeFromProductList: (product:Product) => void;
  openEditProductModal: (product:Product) => void;
}

export default function CrudItem(props: Props) {
  const classes = useStyles();
  const { name, img, price, url, description } = props.product;

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={3} sm={2} md={2} lg={1} className={classes.gridItem}>
          <CardMedia className={classes.media} image={img} />
        </Grid>
        <Hidden xsDown>
          <Grid item xs={3} sm={2} md={2} lg={1} className={classes.gridItem}>
            <Typography variant="body1"><i>{url}</i></Typography>
          </Grid>
        </Hidden>
        <Grid item xs={5} sm={3} md={2} lg={2} className={classes.gridItem}>
          <Typography variant="body1">{name}</Typography>
        </Grid>
        <Hidden smDown>
          <Grid item xs={6} sm={4} md={4} lg={6} className={classes.gridItem}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Hidden>
        <Grid item xs={4} sm={3} md={1} lg={1} className={classes.gridItem}>
          <Typography variant="body1">{price} kr</Typography>
        </Grid>
        <Grid item xs={12} sm={1} className={classes.icons}>
          <IconButton className={classes.iconButton} edge="end" aria-label="edit" onClick={() => props.openEditProductModal(props.product)}>
            <EditIcon className={classes.deleteIcon} />
          </IconButton>
          <IconButton className={classes.iconButton} edge="end" aria-label="delete" onClick={() => props.removeFromProductList(props.product)}>
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}