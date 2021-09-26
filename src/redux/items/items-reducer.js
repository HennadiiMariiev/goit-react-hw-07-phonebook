import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './index';

export const itemsReducer = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, { payload }) => [...state, ...payload],
  [contactsActions.fetchSingleContactSuccess]: (state, { payload }) => [...state, payload],
  [contactsActions.fetchRemoveContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== Number(payload)),
  [contactsActions.fetchRemoveAllContactsSuccess]: () => [],
});
