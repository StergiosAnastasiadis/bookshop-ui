import { configureStore } from '@reduxjs/toolkit'
// import editBookReducer from '../components/EditBookPage/editBookSlice'
import globalReducer from '../components/HomePage/globalSlice'

export const store = configureStore({
  reducer: {
    globalState: globalReducer,
    // editCv: editBookReducer
  },
})