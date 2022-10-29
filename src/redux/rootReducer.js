import { combineReducers } from "redux";

import { catToData } from "./reducer";
import { productData } from "./producReducer";

export default combineReducers({ catToData, productData });
