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

  render() {
    return (
      <input
        className={css.Searchbar}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}
