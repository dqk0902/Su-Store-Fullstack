import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../redux/reducer/cartReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    maxHeight: 420,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",
    borderRadius: 15,
  },
});
const CartLayOut = (props: any) => {
  const cartItem = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const classes = useStyles(props);
  return (
    <>
      <Container>
        <Grid container>
          {cartItem.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="img not found"
                  height="140"
                  image={item.images[0]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <div>
                    <Button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </Button>
                    <Button>{item?.quantity}</Button>
                    <Button
                      disabled={item.quantity === 0 ? true : false}
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </Button>
                  </div>
                  <Button onClick={() => dispatch(removeItem(item.id))}>
                    Remove
                  </Button>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CartLayOut;
