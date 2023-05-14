import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    text: '',
  };

  handleChange = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    return this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const text = this.state.text.trim().toLowerCase();

    if (text === '') {
      return alert('Enter search-text');
    }

    this.props.onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <header className={css.Searchbar} onSubmit={this.handleSubmit}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
