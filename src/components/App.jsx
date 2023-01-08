import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import styled from 'styled-components';
import { ContactList } from './ContactList/ContactList';
import { EditForm } from './EditForm/EditForm';
import { ModalForm } from './ModalForm/ModalForm';
import { AddContactButton } from './SearchBar/AddButton';
import { SearchInput } from './SearchBar/SearchInput';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
`;
const Header = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const App = () => {
  const [contact, setContact] = useState({});
  const dispath = useDispatch();
  const contacts = useSelector(state => state.contactsState.contacts.items);
  const filter = useSelector(state => state.contactsState.filter);
  const modalIsOpen = useSelector(state => state.modalState.modal);
  const editFormIsOpen = useSelector(state => state.modalState.editForm);

  useEffect(() => {
    dispath(fetchContacts());
    // eslint-disable-next-line
  }, []);

  const filtredContacts = () => {
    return !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
  };

  return (
    <Wrapper>
      <Header>
        <AddContactButton />
        <SearchInput />
      </Header>
      {filtredContacts().length > 0 ? (
        <ContactList contacts={filtredContacts()} setContact={setContact} />
      ) : (
        'NotFound...'
      )}
      {modalIsOpen && <ModalForm />}
      {editFormIsOpen && <EditForm contact={contact} />}
    </Wrapper>
  );
};
