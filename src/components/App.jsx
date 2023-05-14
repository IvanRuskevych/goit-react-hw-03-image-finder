import { Component } from 'react';
import imagesApi from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
export default class App extends Component {
  state = {
    images: [],
  };
  componentDidMount = () => {
    imagesApi
      .fetchImages()
      .then(images => this.setState({ images }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,

          backgroundColor: 'blue',
          color: 'white',
        }}
      >
        {this.state.hits && <div>React homework template</div>}

        <Searchbar />
      </div>
    );
  }
}
