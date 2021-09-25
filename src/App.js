import { useEffect } from 'react';
import { Form } from './components/Form/Form';
import { Contacts } from './components/Contacts/Contacts';
import { Filter } from './components/Filter/Filter';
import { ToastContainer } from 'react-toastify';

import { StyledApp } from './components/AppComponents/AppComponents';

import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { getItems } from './redux/items/items-selectors';
import { fetchContacts } from './redux/items/items-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledApp>
      <Form />
      <Filter />
      <Contacts />
      <ToastContainer />
    </StyledApp>
  );
}
