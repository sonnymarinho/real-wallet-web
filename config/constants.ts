import { getStorageSignatureProp } from '../utils/storage';

export const APPLICATION_NAME = 'real-wallet';

export const STORAGE_KEY = {
  TOKEN: getStorageSignatureProp('token'),
};
