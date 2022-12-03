import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  state = {
    // contacts: this.props.initialContacts,
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = (name, number) => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        }));
  };

  onChange = filter => {
    this.setState({ filter });
  };

  deleteContact = contId => {
    // console.log(contId);name
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter onChange={this.onChange} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
