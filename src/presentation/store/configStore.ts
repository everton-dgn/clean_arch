import { configureStore } from '@reduxjs/toolkit'
import {
  persistedReducer,
  serializableCheck
} from 'presentation/store/persistConfig'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck })
})

export const persistor = persistStore(store)
