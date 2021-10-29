import {useState } from 'react';
import PropTypes from "prop-types"
import "./ContactForm.scss";

function ContactForm({onSubmit}) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleAllInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default: return
    }
  };

  // функция записи новых абонентов в телефонную книгу
  const handlePushContact = e => {
    e.preventDefault();
    if (name.trim() === '') return;

    onSubmit({name, number});
    reset()
  };

  const reset = () => {
    setNumber('');
    setName('');
  }


    return (
      <div className="form__container">
        <form onSubmit={handlePushContact}>
          <label className="label">
            Name
            <input
              className="input"
              value={name}
              onChange={handleAllInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              placeholder="Enter Name"
            />
          </label>
          <label className="label">
            Number
            <input
              className="input"
              type="tel"
              value={number}
              onChange={handleAllInputChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              placeholder="Enter Number"
            />
          </label>
          <button className="add__button">Add contact</button>
        </form>
      </div>
    );
}

export default ContactForm;


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }