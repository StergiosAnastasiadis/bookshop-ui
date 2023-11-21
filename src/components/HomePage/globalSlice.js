import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    author: '',
    price: null
}

const globalSlice = createSlice({
    name: 'HOME_PAGE',
    initialState: {
        books: [],
        showDeleteModal: false,
        bookToDelete: initialState
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload
        },
        setShowDeleteModal: (state, action) => {
            state.showDeleteModal = action.payload
        },
        setBookToDelete: (state, action) => {
            state.bookToDelete = action.payload
        }
    }
})

export const globalSliceSelector = (state) => state.globalState

export const {
    setBooks,
    setShowDeleteModal,
    setBookToDelete
} = globalSlice.actions

export default globalSlice.reducer