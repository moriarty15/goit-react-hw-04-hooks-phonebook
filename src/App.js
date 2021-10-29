import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, PrevState) {
    if (this.state.contacts !== PrevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  // функция получения значения из любого инпута
  handleAllInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // метод добавления контакта в телефонную книгу
  formSubmitHandler = (data) => {
    // условие что контакт с таким именем есть в телефонной книге
    if (this.state.contacts.some((e) => e.name.includes(data.name))) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    // объект с именем и номером телефона для пуша в общий массив контактов
    const objd = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };
    this.setState({ contacts: [objd, ...this.state.contacts] });
  };
  // метод удаления контакта из телефонной книги
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // вынес фильтр в функцию
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleAllInputChange} />
        <ContactList
          filter={visibleContacts}
          onDeleteContacts={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
