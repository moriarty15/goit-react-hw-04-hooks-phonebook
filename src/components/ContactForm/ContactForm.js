import React, { Component } from 'react';
import PropTypes from "prop-types"
import "./ContactForm.scss";


class ContractForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  handleAllInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // функция записи новых абонентов в телефонную книгу
  handlePushContact = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') return;

    this.props.onSubmit(this.state);
    this.reset()
  };

  reset = () => {
    this.setState({name: '', number: ''})
  }

  render() {
    const { name, number } = this.state;
    return (
      <div className="form__container">
        <form onSubmit={this.handlePushContact}>
          <label className="label">
            Name
            <input
              className="input"
              value={name}
              onChange={this.handleAllInputChange}
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
              onChange={this.handleAllInputChange}
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
}

export default ContractForm;
