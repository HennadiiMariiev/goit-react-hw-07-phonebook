import {
  StyledItem,
  StyledName,
  StyledNumber,
  StyledDiv,
  StyledList,
  StyledSubTitle,
  StyledButton,
} from './StyledContactsComponents';

import { StyledBanner } from 'components/AppComponents/AppComponents';

import { StyledButton as StyledPrimaryButton } from 'components/Form/StyledFormComponents';
import { fetchRemoveSingleContact, fetchRemoveAllContacts } from 'redux/items/items-operations';

import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'redux/items/items-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const applyFilter = (items, filter) => {
  if (filter === '') {
    return items;
  }

  const searchStr = filter.toLowerCase();
  const filteredContacts = items.filter((contact) => contact.name.toLowerCase().includes(searchStr));
  return filteredContacts;
};

export const Contacts = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const makeContactsList = applyFilter(items, filter).map(({ name, number, id }) => {
    return (
      <StyledItem key={id}>
        <StyledName>{name}</StyledName>
        <StyledNumber>{number}</StyledNumber>
        <StyledButton
          onClick={(event) => {
            dispatch(fetchRemoveSingleContact({ id: event.target.value, name }));
          }}
          value={id}
        >
          Remove
        </StyledButton>
      </StyledItem>
    );
  });

  return (
    <StyledDiv>
      {items.length === 0 ? (
        <StyledBanner>No contacts...</StyledBanner>
      ) : (
        <>
          <StyledSubTitle>Contacts</StyledSubTitle>
          <StyledList>{makeContactsList}</StyledList>
          <StyledPrimaryButton
            onClick={() => dispatch(fetchRemoveAllContacts())}
            style={{ backgroundColor: '#FAFAFA' }}
          >
            Remove all
          </StyledPrimaryButton>
        </>
      )}
    </StyledDiv>
  );
};
