import React, { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { fetchImage } from './Fetch/fetch';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    status: 'idle',
    showModal: false,
    largeImageUrl: '',
    pageNumber: 1,
    search: '',
    loadMore: null,
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  // toggleModal = (evt) => {
  //   this.setState({ largeImageURL: false})
  // }

  handlResult = value => {
    this.setState({
      search: value,
      pageNumber: 1,
      images: [],
      loadMore: null,
    });
  };

  handlImg = largeImageUrl => {
    this.setState({ largeImageUrl });
    this.toggleModal();
  };

  componentDidUpdate(_, prevState) {
    const { pageNumber, search } = this.state;

    if (
      prevState.pageNumber !== this.state.pageNumber ||
      prevState.search !== this.state.search
    ) {
      this.setState({ status: 'load' });

      fetchImage(search, pageNumber)
        .then(e =>
          this.setState(prevState => ({
            images: [...prevState.images, ...e.hits],
            status: 'idle',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
    const { images, status, showModal, largeImageUrl, loadMore } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handlResult} />
        <ImageGallery images={images} onClick={this.handlImg} />
        
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
        {status === 'load' && <Loader />}
        {showModal && (
          <Modal img={largeImageUrl} toggleModal={this.toggleModal} />
        )}
      </Container>
    );
  }
}
