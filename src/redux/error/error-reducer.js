import { createReducer } from '@reduxjs/toolkit';
import { fetchContactsError, fetchContactsRequest } from '../items/items-actions';

export const errorReducer = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
});
