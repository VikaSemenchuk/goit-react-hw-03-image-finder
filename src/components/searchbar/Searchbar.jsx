import { Component } from 'react';
import { Search, SearchForm } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({search: value.toLowerCase()});
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { search } = this.state;
    return (
      <Search>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit">
            <FcSearch size="18" />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={search}
          />
        </SearchForm>
      </Search>
    );
  }
}
