import * as contactsAPI from '../../api/axios';
import * as contactsActions from '../items/items-actions';

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.getAllContacts();

    console.log(contacts);

    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const fetchPostSingleContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contactRequest = await contactsAPI.postSingleContact(contact);
    dispatch(contactsActions.fetchSingleContactSuccess(contactRequest));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const fetchRemoveSingleContact = (id) => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    await contactsAPI.removeSingleContact(id);
    dispatch(contactsActions.fetchRemoveContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const fetchRemoveAllContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.getAllContacts();
    contacts.forEach((el) => contactsAPI.removeSingleContact(el.id));
    dispatch(contactsActions.fetchRemoveAllContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
