import React from 'react';
import { Container, Section, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import Form from './Form/Form';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    const ContactAlert = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (ContactAlert) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  onContactDelete = contactID => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactID
        ),
      };
    });
  };

  render() {
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter onFilterHandle={this.handleFilter} />
          <Contacts
            contactList={this.state.contacts}
            search={this.state.filter}
            deleteContact={this.onContactDelete}
          />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
