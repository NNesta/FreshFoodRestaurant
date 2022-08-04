import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./features/basketSlice";
import RestaurantReducer from "./features/restaurantSlice";

export const store = configureStore({
    reducer: {
        basket: BasketReducer,
        restaurant: RestaurantReducer,
    },
})