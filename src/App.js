// import {useState, useEffect} from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";
import { connect } from "react-redux";
import { addContact, deleteContact, handleFilterChange } from "./redux/action";

function App({
  contacts,
  formSubmitHandler,
  deleteContact,
  filter,
  handleFilterChange,
}) {
  // useEffect(() => {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (contacts) {
  //     setContacts([...contacts]);
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts))

  // }, [contacts])

  // функция получения значения из любого инпута
  // const handleAllInputChange = (e) => {
  //   const {value } = e.currentTarget;
  //   setFilter(value);
  // };

  // вынес фильтр в функцию
  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Container>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList filter={visibleContacts} onDeleteContacts={deleteContact} />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formSubmitHandler: (data) => dispatch(addContact(data)),
    deleteContact: (contactId) => dispatch(deleteContact(contactId)),
    handleFilterChange: (e) => dispatch(handleFilterChange(e)),
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
