import React, { Component } from 'react';
import { Contact } from '../interfaces';
import ContactItem from './ContactItem';

const sortByAlphabet = (a: Contact, b: Contact, type: string) => {
  const aSortCode = a.name.charCodeAt(0);
  const bSortCode = b.name.charCodeAt(0);
  return type === 'alphabet' ? aSortCode - bSortCode : bSortCode - aSortCode;
};

export interface ContactsProps {
  contacts: Contact[];
  sortType: string;
  searchValue: string;
  onlyFavorites: boolean;
}

export interface ContactsState {}

class Contacts extends React.Component<ContactsProps, ContactsState> {
  render() {
    const { contacts, sortType, searchValue, onlyFavorites } = this.props;
    let filtredContacts = contacts;
    if (onlyFavorites) {
      filtredContacts = filtredContacts.filter(contact => contact.favorite);
    }
    if (sortType !== 'default') {
      filtredContacts =
        sortType === 'alphabetically'
          ? contacts.slice().sort((a, b) => sortByAlphabet(a, b, 'alphabet'))
          : contacts.slice().sort((a, b) => sortByAlphabet(a, b, 'reverse'));
    }
    if (searchValue) {
      filtredContacts = filtredContacts
        .slice()
        .filter(contact =>
          contact.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
    }
    return (
      <div className='contacts'>
        <div className='contacts__list'>
          {filtredContacts.map(contact => (
            <ContactItem key={contact.phone} contact={contact} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
