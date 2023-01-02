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
import React from "react";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/reducer/cartSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
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

const Cart = (props: any) => {
  const cartItem = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const classes = useStyles(props);
  const cartTotal = () => {
    let summary = 0;
    cartItem.forEach((item) => {
      summary = item.price * item.quantity + summary;
    });
    return summary;
  };
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
        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
              Summary
            </h3>
            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div className="flex justify-between w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Subtotal
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  ${cartTotal()}
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Discount{" "}
                  <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                    STUDENT
                  </span>
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  $8.00
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white leading-4 text-gray-800">
                  Shipping
                </p>
                <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                  $8.00
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                Total
              </p>
              <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                ${cartTotal()}
              </p>
            </div>
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-pink-300 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-300">
              Pay now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
