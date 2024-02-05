import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newPizza = {
        ...action.payload,
        pizzaId: action.payload.pizzaId,
        quantity: 1,
        totalPrice: action.payload.unitPrice,
      };

      state.cart.push(newPizza);
    },

    increasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      if (!pizza) return;
      pizza.quantity += 1;
      pizza.totalPrice += pizza.unitPrice;
    },

    decreasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );
      if (!pizza) return;
      pizza.quantity -= 1;
      pizza.totalPrice -= pizza.unitPrice;
      if (pizza.quantity === 0)
        cartSlice.caseReducers.removeItem(state, action);
    },

    removeItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increasePizzaQuantity,
  removeItem,
  clearCart,
  decreasePizzaQuantity,
} = cartSlice.actions;

export const getTotalQuantity = (state) => {
  return state.cart.cart.reduce((count, item) => count + item.quantity, 0);
};

export const getCart = (state) => {
  return state.cart.cart;
};

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce(
    (count, item) => count + item.quantity * item.unitPrice,
    0,
  );
};

export default cartSlice.reducer;
