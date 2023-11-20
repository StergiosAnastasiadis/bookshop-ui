import { createSlice } from "@reduxjs/toolkit";


const globalSlice = createSlice({
    name: 'HOME_PAGE',
    initialState: {
        books: []
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        }
    }

})

export const globalSliceSelector = (state) => state.globalState

export const {
    setBooks
} = globalSlice.actions

export default globalSlice.reducer