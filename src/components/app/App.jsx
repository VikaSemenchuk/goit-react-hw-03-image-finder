import { Component } from 'react';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Button } from 'components/button/Button';
// import { Loader } from 'components/loader/Loader';
// import { Modal } from '../modal/Modal.jsx';

import { AppStyled } from './App.styled';

export class App extends Component {

  render () {
    return (
      <AppStyled>
        <Searchbar />
        <ImageGallery />
        <Button />
        {/* <Loader /> */}
        {/* <Modal /> */}
      </AppStyled>
    );
  }
};
