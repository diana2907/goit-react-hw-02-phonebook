import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <li key={contact.id}>
              <Contact
                name={contact.name}
                number={contact.number}
                onDelete={onDelete}
              />
            </li>
          )
      )}
    </ul>
  );
};
