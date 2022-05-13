import { combineReducers } from '@reduxjs/toolkit'
import * as Reducers from 'presentation/store/reducers'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import asyncSessionStorage from 'redux-persist/lib/storage'

const whitelist = ['exampleSimple', 'exampleWithPayload']

const persistConfig = {
  key: 'root',
  storage: asyncSessionStorage,
  whitelist
}

const rootReducer = combineReducers({ ...Reducers })

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}
