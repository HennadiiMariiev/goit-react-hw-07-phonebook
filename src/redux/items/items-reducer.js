import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './items-actions';

export const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, { payload }) => [...state, ...payload],
  [contactsActions.fetchSingleContactSuccess]: (state, { payload }) => [...state, payload],
  [contactsActions.fetchRemoveContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== Number(payload)),
  [contactsActions.fetchRemoveAllContactsSuccess]: () => [],
});
