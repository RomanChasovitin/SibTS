import React, { Component } from 'react';
import { Contact } from '../interfaces';

export interface ContactItemProps {
  contact: Contact;
}

export interface ContactItemState {}

class ContactItem extends React.Component<ContactItemProps, ContactItemState> {
  render() {
    const { contact } = this.props;
    return (
      <div className='contacts__item'>
        <span
          className={`contacts__item-favorite ${
            contact.favorite ? 'contacts__item-favorite--active' : null
          }`}
        />
        <div className='contacts__item-title'>
          <img src={contact.avatar} alt='' className='contacts__item-avatar' />
          <h3 className='contacts__item-title-text'>{contact.name}</h3>
        </div>
        <div className='contacts__item-content'>
          <span className='contacts__item-text contacts__item-text--phone'>
            {contact.phone}
          </span>
          <span className='contacts__item-text contacts__item-text--address'>
            {contact.address.country}, {contact.address.state},{' '}
            {contact.address.city}
          </span>
          <span className='contacts__item-text contacts__item-text--website'>
            <a href={contact.website}>{contact.website}</a>
          </span>
        </div>
      </div>
    );
  }
}

export default ContactItem;
