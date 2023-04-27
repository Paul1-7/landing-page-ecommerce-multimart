import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(({ id }) => id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push(newItem);
        return;
      }

      existingItem.quantity++;
      existingItem.totalPrice = existingItem.price + newItem.price;
    },
    totalAmountCart: (state) => {
      let sum = 0;
      state.cartItems.forEach(({ price, quantity }) => {
        sum += price * quantity;
      });

      state.totalAmount = sum;
    }
  }
});

export const { addToCart, totalAmountCart } = cartSlice.actions;
export default cartSlice.reducer;
