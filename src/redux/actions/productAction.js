import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log(err));
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch((err) => console.log(err));
  dispatch({
    type: ActionTypes.FETCH_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
