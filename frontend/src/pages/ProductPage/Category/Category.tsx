import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { fetchAllCategories } from "../../../redux/reducer/categoryReducer";
const useStyles = makeStyles({
  category: {
    maxWidth: 190,
    maxHeight: 220,
    padding: "10px",
    margin: "20px",
    textAlign: "center",
    borderRadius: 15,
  },
});
const Category = (props: any) => {
  const categories = useAppSelector((state) => state.categoriesReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
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
    </div>
  );
};

export default Category;
