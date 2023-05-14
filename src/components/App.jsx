import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    images: [],
    text: '',
  };

  componentDidMount = () => {
    imagesApi
      .fetchImages()
      .then(response => this.setState({ images: response.hits }))
      .catch(err => console.log(err));
  };

  handleSearchText = text => {
    console.log('handleSearchText', text);
    return this.setState({ text });
  };

  render() {
    // console.log(this.state.images);
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchText} />

        <ImageGallery>
          <ImageGalleryItem images={this.state.images}></ImageGalleryItem>
        </ImageGallery>
      </div>
    );
  }
}
