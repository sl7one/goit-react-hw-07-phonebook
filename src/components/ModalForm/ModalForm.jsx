import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/contacts/modalSlice';
import { addContact } from 'redux/contacts/operations';

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.2; */
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fef5df;
  width: 500px;
  border-radius: 20px;

  padding: 40px 20px;
`;
const Input = styled(Field)`
  margin-top: 10px;
  padding: 15px 0px;
  padding-left: 15px;
  border-radius: 10px;
  width: 95%;
  font-size: 20px;
  outline: none;
  border: 0px;
`;
const Button = styled.button`
  border: 2px solid teal;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  font-size: 20px;
  width: 100px;

  transition: transform 350ms ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const ButtonAdd = styled(Button)`
  background-color: teal;
  margin-left: 15px;
`;
const Buttons = styled.div`
  margin-left: auto;
  margin-top: 20px;
`;

export const ModalForm = () => {
  const dispath = useDispatch();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Введите более 3х символов')
      .max(20, 'Слишком маленькое имя')
      .required('Заполните поле имени'),
    phone: Yup.string()
      .min(12, 'Минимальная длинна символов 10 цифр')
      .max(12, 'Максимальная длинна символов 12 цифр')
      .required('Заполните поле телефона'),
  });

  return (
    <Backdrop>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // console.log(values);
          dispath(addContact(values));
          dispath(closeModal());
        }}
      >
        {() => (
          <StyledForm>
            <label htmlFor="name">
              Name
              <Input id="name" name="name" />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="phone">
              Phone
              <Input id="phone" name="phone" placeholder="0XX1234567" />
              <ErrorMessage name="phone" />
            </label>
            <Buttons>
              <Button type="button" onClick={() => dispath(closeModal())}>
                Close
              </Button>
              <ButtonAdd type="submit">Add</ButtonAdd>
            </Buttons>
          </StyledForm>
        )}
      </Formik>
    </Backdrop>
  );
};

// if (!values) return;
// axios
//   .put(
//     `https://63b72b2d4d97e82aa3b6324d.mockapi.io/api/v1/contacts/${idContact}`,
//     values
//   )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// setModal(false);
