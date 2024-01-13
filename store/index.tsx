// store/index.tsx
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './reducers/cart';

const reducer = {
  cart: cartReducer,
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  cart: cartReducer,
});

let store = configureStore({
  reducer,
});

const makeStore = ({ isServer }: { isServer: boolean }) => {
  if (isServer) {
    return store;
  } else {
    const persistConfig = {
      key: "shoppingcart",
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
