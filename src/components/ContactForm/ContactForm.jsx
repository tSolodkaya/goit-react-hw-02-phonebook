import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChangeInput = event => {
    const inputName = event.target.name;
    this.setState({ [inputName]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChangeInput}
          />
        </label>
        <label>
          Phone number
          <input
            type="phone"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.phone}
            onChange={this.handleChangeInput}
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
