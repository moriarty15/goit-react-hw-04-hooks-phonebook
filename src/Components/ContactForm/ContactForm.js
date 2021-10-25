import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import "./ContactForm.scss";

export default function ContactForm(props) {
  const { contacts, setContacts } = props;

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
    if (contacts) {
      if (contacts.some((contact) => contact.name === name)) {
        alert(`${name} is already in contacts`);
        setName("");
        setNumber("");
        return;
      }
    }
    if (!name) return;

    e.preventDefault();
    setContacts([{ name: name, number: number, id: uuidv4() }, ...contacts]);
    setName("");
    setNumber("");
  };

  return (
    <form>
      <label className="label">
        Name
        <input
          className="input"
          onChange={handelChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="label">
        Number
        <input
          className="input"
          onChange={handelChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className="add__button" onClick={addContact}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};
