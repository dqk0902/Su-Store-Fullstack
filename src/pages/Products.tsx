import React, { useEffect, useState } from "react";
import { Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardMedia } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import {
  fetchAllProducts,
  sortByName,
  sortByPrice,
} from "../redux/reducer/productReducer";
import { Container, Grid } from "@mui/material";
import { addToCart } from "../redux/reducer/cartSlice";
import { fetchAllCategories } from "../redux/reducer/categoryReducer";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    alignItems: "top",
    padding: "15px",
    margin: "32px",
    textAlign: "center",
    borderRadius: 15,
  },
  category: {
    maxWidth: 190,
    maxHeight: 220,
    padding: "10px",
    margin: "20px",
    textAlign: "center",
    borderRadius: 15,
  },
});
const Products = (props: any) => {
  const [search, setSearch] = useState("");
  const categories = useAppSelector((state) => state.categoriesReducer);
  const [categoryId, setCategoryId] = useState<number>(0);
  const products = useAppSelector((state) =>
    state.productReducer.filter((item) => {
      if (categoryId) {
        return (
          item.category.id === categoryId &&
          item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      } else {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      }
    })
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const classes = useStyles(props);
  return (
    <div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {categories.slice(0, 5).map((category) => (
            <Grid key={category.id}>
              <Card className={classes.category}>
                <CardMedia
                  component="img"
                  alt="img not found"
                  height="140"
                  image={category.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <div className="flex items-center justify-center mt-10 mb-24">
        <Menu as="div" className="relative inline-block text-left mr-2 ">
          <div>
            <Menu.Button className="text-white bg-pink-300 hover:bg-pink-400  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
              Sort by category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCategoryId(1)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Clothes
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCategoryId(2)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Electronics
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCategoryId(3)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Funitures
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCategoryId(4)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Shoes
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCategoryId(5)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Others
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="text-white bg-pink-300 hover:bg-pink-400  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
              Sort by name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => dispatch(sortByName("Desc"))}
                    >
                      Desc
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => dispatch(sortByName("Asc"))}
                    >
                      Asc
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left ml-2">
          <div>
            <Menu.Button className="text-white bg-pink-300 hover:bg-pink-400  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
              Sort by price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-28 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => dispatch(sortByPrice("Highest Price"))}
                    >
                      Highest
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => dispatch(sortByPrice("Lowest Price"))}
                    >
                      Lowest
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="flex border border-pink-200 rounded ml-2">
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
