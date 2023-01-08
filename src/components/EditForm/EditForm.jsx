import { useState } from 'react';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { closeEditForm } from 'redux/contacts/modalSlice';
import { editContact } from 'redux/contacts/operations';
import styled from 'styled-components';

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  transform: translate(-50%, -50%);
  display: flex;
  border-radius: 10px;
  background-color: Beige;
  padding: 20px;
  align-items: center;
`;
const Button = styled.button`
  border: 2px solid teal;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  font-size: 20px;
  width: 100px;
  height: 100%;
  margin-left: 20px;

  transition: transform 350ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  padding: 15px 0px;
  padding-left: 15px;
  border-radius: 10px;
  width: 95%;
  font-size: 20px;
  outline: none;
  border: 0px;
  margin-left: 20px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const EditForm = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: contact.name,
    phone: contact.phone,
  });
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editContact({ ...contact, ...formData }));
    dispatch(closeEditForm());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <BsFillEmojiSunglassesFill size={'80px'} color="teal" />
      <Wrapper>
        <Label>
          <Input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            placeholder={contact.name}
          />
        </Label>
        <Label>
          <Input
            type="text"
            name="phone"
            required
            onChange={handleChange}
            value={formData.phone}
            placeholder={contact.phone}
          />
        </Label>
      </Wrapper>
      <div>
        <Button type="submit">Apply</Button>
        <Button
          type="button"
          style={{ marginTop: '15px' }}
          onClick={() => {
            dispatch(closeEditForm());
          }}
        >
          Close
        </Button>
      </div>
    </Form>
  );
};
