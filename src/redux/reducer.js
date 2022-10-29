import { Add_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";
export const catToData = (data = [], action) => {
  //   if (action.type === Add_TO_CART) {
  //     console.log("reducer called", action);
  //     return action.data;
  //   } else {
  //     return "abc";
  //   }

  switch (action.type) {
    case Add_TO_CART:
      console.log("Add_TO_CART to condition", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART to condition", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    // return [...data];
    case EMPTY_CART:
      console.log("EMPTY_CART to condition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
