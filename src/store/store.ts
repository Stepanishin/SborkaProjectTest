import {combineReducers, configureStore} from "@reduxjs/toolkit";
import addCardSlice from './reducers/getProductToBasket'
import showBasketSlice from './reducers/showBasket'

const rootReducer = combineReducers({
    addCardSlice,
    showBasketSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']