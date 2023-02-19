import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import { Container } from "@mui/material";
import ContentComponent from "./ContentComponent";

function ContentList() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products);

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <ContentComponent />
    </Container>
  );
}

export default ContentList;
