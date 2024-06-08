import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../utils/cartSlice";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,

});

appStore.subscribe(() => {
  saveState({
    cart: appStore.getState().cart,
  });
});

export default appStore;
