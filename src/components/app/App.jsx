import { Component } from 'react';

import { getImages } from 'services/fetch';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Button } from 'components/button/Button';
// import { Loader } from 'components/loader/Loader';
// import { Modal } from '../modal/Modal.jsx';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    isShowModal: false,
    search: '',
    gallery: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      getImages(this.state.search).then(images => {
        this.setState({ gallery: images.hits });
        console.log('images :>> ', images.hits);
      });
    }
  }

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  handleSearchFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    const { gallery } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />

        {gallery && (<ImageGallery images={gallery} />)}

        <Button />
        {/* <Loader /> */}
        {/* <Modal /> */}
      </Container>
    );
  }
}
