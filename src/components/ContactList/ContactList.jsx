import { FcBusinesswoman, FcPhone, FcBusinessman } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';
import { TbDots } from 'react-icons/tb';
import { Button, Item, List, Name, Phone } from './contactList.styled';
import { useDispatch } from 'react-redux';
import { showEditForm } from 'redux/contacts/modalSlice';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = ({ contacts, setContact }) => {
  const dispatch = useDispatch();
  const handleClickDelete = event => {
    dispatch(deleteContact(event.target.dataset.id));
  };
  const handleClickEdit = event => {
    const [contact] = contacts.filter(
      el => el.id === event.currentTarget.dataset.id
    );
    setContact({ name: contact.name, phone: contact.phone, id: contact.id });
    // console.log(contact.name, event.currentTarget.dataset.id);

    dispatch(showEditForm());
  };
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id} gender={contact.gender}>
          <Name>
            {contact.gender === 'male' ? (
              <FcBusinessman />
            ) : (
              <FcBusinesswoman />
            )}{' '}
            {contact.name}
          </Name>
          <Phone>
            <FcPhone /> {contact.phone}
          </Phone>
          <div>
            <Button
              type="button"
              onClick={handleClickEdit}
              data-id={contact.id}
              data-type="edit"
            >
              <TbDots color="green" />
            </Button>
            <Button
              type="button"
              onClick={handleClickDelete}
              data-id={contact.id}
            >
              <BsTrash color="red" size="1em" />
            </Button>
          </div>
        </Item>
      ))}
    </List>
  );
};
