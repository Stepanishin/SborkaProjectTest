import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../types/ICard";

type DefaultBasketType = {
    cards: ICard[]
}

const initialState : DefaultBasketType = {
    cards: []   
}

export const addCardSlice = createSlice({
    name: "addCard",
    initialState,
    reducers: {
            addCard(state, action) {
                state.cards = [...action.payload]
            },
        },
})

export default addCardSlice.reducer