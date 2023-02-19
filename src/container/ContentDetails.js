import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";
import {
  Container,
  Paper,
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ContentDetails() {
  const product = useSelector((state) => state.product);
  const { category, description, image, price, title } = product;
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && id !== "") dispatch(fetchProduct(id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);
  return (
    <Container maxWidth="xl" sx={{ width: "60%", height: "auto", mt: 5 }}>
      <Paper elevation={2}>
        <Card sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 650,
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 auto",
              }}
            >
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ color: "#B99976" }}
              >
                {category}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ textAlign: "justify" }}
              >
                {description}
              </Typography>
              <Typography
                component="div"
                variant="h5"
                sx={{ color: "red", mt: 2 }}
              >
                ${price}
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                color="error"
                sx={{ mt: 1 }}
              >
                Add to Cart
              </Button>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 300 }}
            image={image}
            alt="Image not available"
          />
        </Card>
      </Paper>
    </Container>
  );
}

export default ContentDetails;
