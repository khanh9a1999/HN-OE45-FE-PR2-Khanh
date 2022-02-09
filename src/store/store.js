import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './slices/ProductSlice'
import Notification from './slices/NotificationSlice'
import CartReducer from './slices/CartSlice'

const rootReducer = combineReducers({
    products: ProductsReducer,
    notification: Notification,
    cart: CartReducer
})

export const store = configureStore({
    reducer: rootReducer
})
