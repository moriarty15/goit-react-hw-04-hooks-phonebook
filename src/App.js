import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();
    setContacts([{ name: name, number: number, id:uuidv4() }, ...contacts]);
  };

  return (
    <div>
      <form>
        <label>
          Name
          <input
            onChange={handelChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handelChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button onClick={addContact}>Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({id, name, number}) => {
          return <li key={id}>
            <p>{name}: <span>{number}</span></p>
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
