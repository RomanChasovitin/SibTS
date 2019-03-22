import React, { Component } from 'react';
import Contacts from './Contacts';
import { inject, observer } from 'mobx-react';
import { ContactsStore } from '../stores/ContactsStore';
import ContactControls from './ContactsControls';

export interface HomePageProps {
  contactsStore: ContactsStore;
}

export interface HomePageState {
  sortType: string;
  searchValue: string;
  onlyFavorites: boolean;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  state = {
    sortType: 'default',
    searchValue: '',
    onlyFavorites: false,
  };

  public updateSortType = (sortType: string) => {
    this.setState({ sortType: sortType });
  };

  public updateSearch = (value: string) => {
    this.setState({ searchValue: value });
  };

  public updateFavorites = () => {
    this.setState({ onlyFavorites: !this.state.onlyFavorites });
  };

  render() {
    const { contactsStore } = this.props;
    const { sortType, searchValue, onlyFavorites } = this.state;
    return (
      <div className='container'>
        <ContactControls
          updateSearch={this.updateSearch}
          updateSortType={this.updateSortType}
          updateFavorites={this.updateFavorites}
          sortType={sortType}
          searchValue={searchValue}
          onlyFavorites={onlyFavorites}
        />
        <Contacts
          contacts={contactsStore.contacts}
          searchValue={searchValue}
          sortType={sortType}
          onlyFavorites={onlyFavorites}
        />
      </div>
    );
  }
}

export default inject('contactsStore')(observer(HomePage));
