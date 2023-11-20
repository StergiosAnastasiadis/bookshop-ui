import { configureStore } from '@reduxjs/toolkit'
import editBookReducer from '../components/EditBookPage/editBookSlice'

export const store = configureStore({
  reducer: {
    editCv: editBookReducer
  },
})