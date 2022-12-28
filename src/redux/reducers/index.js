import { combineReducers } from "redux";
import {
  productReducer,
  // setSearch,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  // setSearch: setSearch,
});

export default reducers;
