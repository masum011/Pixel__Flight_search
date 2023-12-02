import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../pages/beforeAuth/loginSlice'
import homeSlice from '../pages/afterAuth/homeSlice'

export const store = configureStore({
  reducer: {
    login:loginSlice,
    home:homeSlice
  },
})