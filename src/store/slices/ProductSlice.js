import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import queryString from 'query-string'

const initialState = {
    allProducts: {
        listAllProducts: [],
        isLoading: false
    },
    pagination: {
        _limit: 2,
        _totalRows: 1,
        isLoading: false
    },
    filter: {
        _limit: 2,
        _page: 1
    },
    currentPage: 1,
    error: null
}

export const getAllProducts = createAsyncThunk(
    'products/all',
    async (filter, { rejectWithValue }) => {
        try {
            const paramString = queryString.stringify(filter)
            const res = await axios(
                {
                    method: 'GET',
                    url: `http://localhost:4000/data?${paramString}`
                }
              );
            return res.data
        }
        catch(err) {
            return rejectWithValue(err.res.data)
        }
    }
)

export const getPagination = createAsyncThunk(
    'pagination',
    async (filter, { rejectWithValue }) => {
        try {
            const paramString = queryString.stringify(filter)
            const res = await axios(
                {
                    method: 'GET',
                    url: `http://localhost:4000/data?${paramString}`
                }
              );
            return res.data
        }
        catch(err) {
            return rejectWithValue(err.res.data)
        }
    }
)

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.allProducts.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.allProducts.isLoading = false
                state.allProducts.listAllProducts = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.allProducts.isLoading = false
                if (action.payload) {
                    state.error = action.payload.errorMessage
                } else {
                    state.error = action.error.message
                }
            })
            .addCase(getPagination.pending, (state) => {
                state.pagination.isLoading = true
            })
            .addCase(getPagination.fulfilled, (state, action) => {
                state.pagination._totalRows = action.payload.length
            })
            .addCase(getPagination.rejected, (state, action) => {
                state.pagination.isLoading = false
                if (action.payload) {
                    state.error = action.payload.errorMessage
                } else {
                    state.error = action.error.message
                }
            })
    }
})

export const { setFilter, setCurrentPage } = ProductsSlice.actions

export default ProductsSlice.reducer
