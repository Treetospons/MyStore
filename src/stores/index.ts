import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import rootSaga from './sagas';
import {storage} from '~/utils/storage';
import {persistReducer, persistStore} from 'redux-persist';

const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['themeReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
