import React, { Component } from 'react';

export interface ContactControlsProps {
  updateSortType: Function;
  updateSearch: Function;
  updateFavorites: Function;
  sortType: string;
  searchValue: string;
  onlyFavorites: boolean;
}

export interface ContactControlsState {}

class ContactControls extends React.Component<
  ContactControlsProps,
  ContactControlsState
> {
  private changeSortType = (type: string) => {
    this.props.updateSortType(type);
  };

  private handleSearch = (e: any) => {
    const { value } = e.target;
    this.props.updateSearch(value);
  };

  private toggleFavorites = () => {
    this.props.updateFavorites();
  };

  render() {
    const { sortType, searchValue, onlyFavorites } = this.props;
    const activeSortItemClass = 'contacts__controls-sort-item--active';
    return (
      <div className='contacts__controls'>
        <div className='contacts__controls-sort'>
          <span
            className={`contacts__controls-sort-item ${
              sortType === 'default' ? activeSortItemClass : null
            }`}
            onClick={this.changeSortType.bind(this, 'default')}
          >
            default
          </span>
          <span
            className={`contacts__controls-sort-item ${
              sortType === 'alphabetically' ? activeSortItemClass : null
            }`}
            onClick={this.changeSortType.bind(this, 'alphabetically')}
          >
            alphabetically
          </span>
          <span
            className={`contacts__controls-sort-item ${
              sortType === 'reverse' ? activeSortItemClass : null
            }`}
            onClick={this.changeSortType.bind(this, 'reverse')}
          >
            reverse
          </span>
        </div>
        <div className='contacts__controls-search'>
          <span
            className={`contacts__controls-favorite ${
              onlyFavorites ? 'contacts__controls-favorite--active' : null
            }`}
            onClick={this.toggleFavorites}
          >
            Only Favorites
          </span>
          <input
            type='text'
            placeholder='Seach...'
            onChange={this.handleSearch}
            onKeyUp={this.handleSearch}
            value={searchValue}
            className='contacts__controls-search-field'
          />
        </div>
      </div>
    );
  }
}

export default ContactControls;
