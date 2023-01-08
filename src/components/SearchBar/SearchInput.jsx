import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px;
  border-radius: 10px;
  margin-left: 15px;
  font-size: 20px;
  width: 100%;
`;

export const SearchInput = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <Input
      type="text"
      name="contact"
      placeholder="search by name..."
      autoFocus
      onChange={handleChange}
    />
  );
};
