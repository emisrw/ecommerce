import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    price: "$5",
    image:
      "https://www.mediaexpert.pl/media/cache/gallery/product/0/865/860/833/h78zdhha/images/26/2686661/APPLE-MacBook-Pro-13-front.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    price: "$10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Sports_shoes.jpg/1200px-Sports_shoes.jpg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
