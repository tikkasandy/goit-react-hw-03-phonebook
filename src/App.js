import { Component } from 'react';
import { nanoid } from 'nanoid';
import AddForm from './components/AddForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter/Filter';
import Section from './components/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле todos, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const isUnique = this.state.contacts.find(item => item.name === name);

    if (isUnique) {
      alert(`${name} name is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteContact = data => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return this.sortContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      ),
    );
  };

  sortContacts = data => {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <AddForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
