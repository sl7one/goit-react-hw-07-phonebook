import { useDispatch } from 'react-redux';
import { showModal } from 'redux/contacts/modalSlice';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid black;
  border-radius: 10px;
  background-color: teal;
  padding: 5px;
  transition: transform 350ms ease-in-out;
  color: white;
  font-size: 20px;
  width: 150px;
  &: hover {
    transform: scale(1.1);
  }
`;

export const AddContactButton = () => {
  const dispath = useDispatch();

  return (
    <Button type="button" onClick={() => dispath(showModal())}>
      Add contact
    </Button>
  );
};
