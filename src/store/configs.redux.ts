import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  persistReducer,
} from 'redux-persist'

import { RootReducers } from './reducers'


const persistConfig = {
  key: 'key',
  storage: AsyncStorage,
  blacklist: ['utils', 'countries', 'screenSlice', 'property', 'home'],
  whitelist: [],
}

export const persistedReducer = persistReducer(persistConfig, RootReducers)
