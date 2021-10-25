import { useState, useEffect } from "react";
import ContactForm from "./Components/ContactForm";
import Filter from "./Components/Filter";
import Container from './Components/Container'
import ContactList from "./Components/ContactList";

function App() {
  if (!localStorage.getItem('contacts')) {
    localStorage.setItem('contacts', '[]')
  }
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')));

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "filter":
        setFilter(value);
        break;
      default:
        return;
    }
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    }
    
  };

  const onDeleteContact = contactId => {
    return setContacts(contacts.filter(contact => contact.id !== contactId))
   }

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <h2>Contacts</h2>
      <Filter handelChange={handelChange} />
      <ContactList visibleContacts={visibleContacts}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
}

export default App;
