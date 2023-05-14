import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    images: [],
    text: '',
    status: 'idle',
  };

  componentDidMount = () => {
    if (this.state.text === '') {
      return this.setState({ status: 'idle' });
    }

    imagesApi
      .fetchImages()
      .then(response => {
        this.setState({ images: response.hits });
        this.setState({ status: 'resolved' });
      })
      .catch(err => {
        this.setState({ status: 'rejected' });
      });
  };

  handleSearchText = text => {
    console.log('handleSearchText', text);
    return this.setState({ text });
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <Searchbar onSubmit={this.handleSearchText} />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <Searchbar onSubmit={this.handleSearchText} />
          <ImageGallery>
            <ImageGalleryItem images={images}></ImageGalleryItem>
          </ImageGallery>
        </div>
      );
    }

    if (status === 'rejected') {
      alert(`Error`);
    }
  }
}
