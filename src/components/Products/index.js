import React from "react";
import Product from "../Product";
import {Grid, Box, Typography, Button, CircularProgress, Link} from "@material-ui/core";
import axios from 'axios';

class Products extends React.Component {
  state = {
    product : [],
}
componentDidMount() {
  axios
    .get("https://kmin-academy-shopping-cart-api.herokuapp.com/products")
    .then(res => {
      this.setState({ product: res.data });
    })
    .catch(err => {
      console.log(err);
    });
}
  render(){
   
    return (
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={8}>
          <Box display="flex" flexWrap="wrap" >
            {
             this.state.product.length>0 ? this.state.product.map((product)=>{
                return  <Product id = {product.id} name={<Link style={style} to="/products/:{product.id}">product.name</Link>}
                
                 price={product.price} src={product.src}></Product>
              }):<CircularProgress size="40px"/>
            }
         
          </Box>
        </Grid>
      </Grid>
  );
  }
 
}
export default Products;
