import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Hidden, Typography } from '@material-ui/core';
import  { mockedProducts, Product } from '../ProductList'
import CrudItem from './CrudItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.primary,
      marginBottom: '1rem',
    },
    link: {
      textDecoration: 'none'
    }
  }),
);

export default function Crud2() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('')
  const [img, setImg] = React.useState('')
  const [productList, setProductList] = React.useState(getProductList())
  const [isFieldDisabled, setIsFieldDisabled] = React.useState(true)
  
  function getProductList() {
    const productListFromLS = localStorage.getItem('productList');
    if (productListFromLS) {
      return JSON.parse(productListFromLS) as Product[]
    }
    localStorage.setItem('productList', JSON.stringify(mockedProducts));
    return mockedProducts;
  }

  function removeFromProductList(product:Product) {
    const updatedProductList = productList.filter(item => item.url !== product.url);
    setProductList(updatedProductList);
    updateProductListInLocalStorage(updatedProductList);
  }

  function updateProductListInLocalStorage(newProductList:Product[]) {
    localStorage.setItem('productList', JSON.stringify(newProductList))
  }

  function openEditProductModal(product:Product) {
    setUrl(product.url)
    setName(product.name)
    setDescription(product.description)
    setPrice(product.price.toString())
    setImg(product.img)
    setOpen(true);
  }

  function openAddProductModal() {
    setUrl('')
    setName('')
    setDescription('')
    setPrice('')
    setImg('')
    setIsFieldDisabled(false)
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(isFieldDisabled) {
      let editedProduct = productList.find(item=> item.url === url);  
      if(editedProduct) {
        editedProduct.name = name;
        editedProduct.description = description;
        editedProduct.price = parseInt(price);
        editedProduct.img = img;
        setProductList(productList)
        updateProductListInLocalStorage(productList)
      }
    }
    else {
      let updatedProductList = [...productList, {url: url, name: name, description: description, price: parseInt(price), img: img }];
      setProductList(updatedProductList)
      setIsFieldDisabled(true)  
      updateProductListInLocalStorage(updatedProductList);
    }
    setOpen(false);  
    console.log(productList)
  }

  const handleUrlInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUrl(e.target.value)
  };
  const handleNameInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.target.value)
  };
  const handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDescription(e.target.value)
  };
  const handlePriceInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  setPrice(e.target.value)
  };
  const handleImgInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setImg(e.target.value)
  };

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Box pt={2} pb={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.paper}>
                <h2>Produktlista</h2>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.paper}>
                <Link className={classes.link} to="/">
                    <Button variant="contained" color="primary">Gå tillbaka till butiken</Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.paper}>
                <Button variant="contained" color="primary" onClick={openAddProductModal}>Lägg till en produkt <AddCircleIcon/></Button>
              </Grid>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="edit-product">Ändra produkt</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fyll i ändringarna och tryck på "spara" för att ändra i produktlistan.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="ProduktID"
            defaultValue={url}
            type="text"
            onChange={handleUrlInput}
            fullWidth
            disabled={isFieldDisabled}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Namn"
            defaultValue={name}
            type="text"
            onChange={handleNameInput}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Beskrivning"
            multiline
            defaultValue={description}
            type="text"
            onChange={handleDescriptionInput}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Pris"
            defaultValue={price}
            type="text"
            onChange={handlePriceInput}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="img"
            label="Länk till bild"
            multiline
            defaultValue={img}
            type="text"
            onChange={handleImgInput}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tillbaka
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Spara
          </Button>
        </DialogActions>
      </Dialog>
      <Hidden xsDown>
        <Grid container spacing={2}>
          <Grid item xs={3} sm={2} md={2} lg={1}>
          </Grid>
          <Hidden xsDown>
              <Grid item xs={2} md={2} lg={1}>
                <Typography variant="body1">
                  ID
                </Typography>
              </Grid>
          </Hidden>
          <Grid item xs={5} sm={3} md={2} lg={2}>
            <Typography variant="body1">
              Namn
            </Typography>
          </Grid>
          <Hidden smDown>
              <Grid item xs={6} sm={4} md={4} lg={6}>
              <Typography variant="body1">Beskrivning</Typography>
              </Grid>
          </Hidden>
          <Grid item xs={4} sm={3} md={1} lg={1}>
            <Typography variant="body1">Pris</Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="body1"></Typography>
          </Grid>
        </Grid>
      </Hidden>
            {productList.map((product, index) => (
              <Grid item xs={12} key={index}>
                  <CrudItem product={product} removeFromProductList={removeFromProductList} openEditProductModal={openEditProductModal}/>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary" align="center">
                  {'Copyright © '}
                  <Link className={classes.link} to="/">
                    {' Marsvinstema '}
                  </Link>
                  {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  </>
  );
}