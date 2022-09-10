import { createSlice } from "@reduxjs/toolkit";

type DefaultShowBasketType = {
    isShow : boolean
}

const initialState : DefaultShowBasketType = {
    isShow: true  
}

export const showBasketSlice = createSlice({
    name: "showBasket",
    initialState,
    reducers: {
            showBasket(state) {
                state.isShow = !state.isShow
            },
        },
})

export default showBasketSlice.reducer