// store/index.tsx
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';
import userReducer from './reducers/user'

const reducer = {
  cart: cartReducer,
  user: userReducer
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

let store = configureStore({
  reducer,
});

const makeStore = ({ isServer }: { isServer: boolean }) => {
  if (isServer) {
    return store;
  } else {
    const persistConfig = {
      key: "trunganh",
      whitelist: ["cart", "user"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    store = configureStore({
      reducer: persistedReducer,
    });

    // @ts-ignore
    store.__persistor = persistStore(store);

    return store;
  }
};

// Export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
