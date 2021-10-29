import {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      setContacts([...contacts]);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))

  }, [contacts])

  // функция получения значения из любого инпута
  const handleAllInputChange = (e) => {
    const {value } = e.currentTarget;
    setFilter(value);
  };

  // метод добавления контакта в телефонную книгу
  const formSubmitHandler = (data) => {
    // условие что контакт с таким именем есть в телефонной книге
    if (contacts.some((e) => e.name.includes(data.name))) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    // объект с именем и номером телефона для пуша в общий массив контактов
    const objd = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };
    setContacts([objd, ...contacts]);
  };
  // метод удаления контакта из телефонной книги
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(
        (contact) => contact.id !== contactId
      ),
    )
  };

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
        <Filter filter={filter} onChange={handleAllInputChange} />
        <ContactList
          filter={visibleContacts}
          onDeleteContacts={deleteContact}
        />
      </Container>
    );
  
}

export default App;
