import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

  // storage.removeItem('persist:root')
const initialState={}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))

    
)

export const persistor = persistStore(store)