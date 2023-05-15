import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    status: 'idle',
    imageId: null,
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

  handleImageId = imageId => {
    this.setState({ imageId });
  };

  render() {
    const { images, status, imageId } = this.state;

    if (status === 'idle') {
      return <Searchbar onSubmit={this.handleFormSubmit} />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
            <ImageGallery>
              <ImageGalleryItem
                images={images}
                handleImageId={this.handleImageId}
              ></ImageGalleryItem>
            </ImageGallery>
          </div>
          {imageId && <Modal />}
        </>
      );
    }

    if (status === 'rejected') {
      return alert(`Error`);
    }
  }
}

//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.toggleModal}>
//           button
//         </button>
//         {this.state.showModal && <Modal />}
//       </>
//     );
//   }
// }
