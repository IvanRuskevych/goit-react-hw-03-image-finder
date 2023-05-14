import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    status: 'idle',
  };

  componentDidMount = () => {
    if (this.state.query === '') {
      return this.setState({ status: 'idle' });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.query !== this.state.query) {
      this.setState({ status: 'pending' });

      imagesApi
        .fetchImages(this.state.query)
        .then(response => {
          this.setState({ images: response.hits, status: 'resolved' });
        })
        .catch(err => {
          this.setState({ err, status: 'rejected' });
        });
    }
  };

  handleFormSubmit = query => {
    // console.log('handleFormSubmit', query);
    return this.setState({ query });
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <Searchbar onSubmit={this.handleFormSubmit} />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
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
