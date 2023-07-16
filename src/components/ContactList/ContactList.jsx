import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAction } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import c from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const removeContact = id => {
    return dispatch(deleteContactAction(id));
  };

  return (
    <ul className={c.contactList}>
      {contacts
        .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
        .map(contact => {
          return (
            <li className={c.contactListItem} key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button
                className={c.contactListBtn}
                key={contact.id}
                name={contact.name}
                type="submit"
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
