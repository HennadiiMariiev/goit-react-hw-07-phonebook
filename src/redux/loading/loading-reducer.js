import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchSingleContactSuccess,
  fetchContactsSuccess,
  fetchContactsError,
  fetchRemoveContactSuccess,
  fetchRemoveAllContactsSuccess,
} from '../items/items-actions';

export const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchSingleContactSuccess]: () => false,
  [fetchRemoveContactSuccess]: () => false,
  [fetchRemoveAllContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});
