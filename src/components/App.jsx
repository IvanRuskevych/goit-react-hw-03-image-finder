import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
export default class App extends Component {
  state = {
    images: [],
    text: '',
  };

  componentDidMount = () => {
    imagesApi
      .fetchImages()
      .then(images => this.setState({ images }))
      .catch(err => console.log(err));
  };

  handleSearchText = text => {
    // console.log(text);
    return this.setState({ text });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchText} />
      </div>
    );
  }
}
