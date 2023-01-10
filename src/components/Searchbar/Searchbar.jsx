import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchButton,
  SearchSpan,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  searchResult = e => {
    this.setState({
      search: e.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    if (search.trim() === '') {
      return alert(' You must enter a keyword');
    }

    this.props.onSubmit(search);
    this.setState({ search: '' })
  };
  

  render() {
    const { search } = this.state;
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchSpan>Search</SearchSpan>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.searchResult}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
