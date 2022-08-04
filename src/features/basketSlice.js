import { createSlice } from "@reduxjs/toolkit";
const initialState = {

}
export const BasketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: []
    },
    reducers: {
        addItemToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeItemFromBasket: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id == action.payload.id
                
            );console.log(index);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`can not remove product with ${action.payload.id} as it does not exist in the basket`);
            }
            state.items = newBasket;
        }
    }
})
export const { addItemToBasket, removeItemFromBasket } = BasketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0);
export default BasketSlice.reducer;