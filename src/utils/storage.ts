import {Storage} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
import {ENCRYPTION_KEY} from '~/services/config';

const mmkvStorage = new MMKV({
  id: 'storage',
  encryptionKey: ENCRYPTION_KEY,
});

export const storage: Storage = {
  setItem: (key, value) => {
    mmkvStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = mmkvStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    mmkvStorage.delete(key);
    return Promise.resolve();
  },
};
