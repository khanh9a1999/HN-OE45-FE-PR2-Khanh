import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ProductsReducer from './slices/ProductSlice'
import Notification from './slices/NotificationSlice'

const rootReducer = combineReducers({
    products: ProductsReducer,
    notification: Notification
})

export const store = configureStore({
    reducer: rootReducer
})
