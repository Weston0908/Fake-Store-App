import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

function ContentComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const displayContent = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Grid item xl={3} key={id}>
        <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
          <Card sx={{ maxWidth: 300, height: 600, overflow: "auto" }}>
            <Box
              component="div"
              height="350px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CardMedia
                component="img"
                alt="The image is not available"
                image={image}
                style={{
                  width: "200px",
                  height: "auto",
                }}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight="700"
              >
                {title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                ${price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {category}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  });

  return (
    <div>
      <Grid container spacing={2}>
        {displayContent}
      </Grid>
    </div>
  );
}

export default ContentComponent;
