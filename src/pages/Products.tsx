import React, { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardMedia } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { fetchAllProducts } from "../redux/reducer/productReducer";
import { Container, Grid } from "@mui/material";
import { Product } from "../types/product";
import { addToCart } from "../redux/reducer/cartSlice";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",

    borderRadius: 15,
  },
});
const Products = (props: any) => {
  const [search, setSearch] = useState("");
  const products = useAppSelector((state) =>
    state.productReducer.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    })
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const classes = useStyles(props);
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex border border-pink-200 rounded">
          <input
            type="text"
            className="block w-full px-4 py-2 bg-white border rounded-md focus:border-pink-200 focus:ring-pink-200 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Container>
        <Grid container>
          {products.map((product) => (
            <Grid item xs={12} md={6} lg={4} key={product.id}>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="img not found"
                  height="140"
                  image={product.images[0]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                  >
                    <p>@{product.category.name}</p>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${product.price}
                  </Typography>
                  <Button onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
