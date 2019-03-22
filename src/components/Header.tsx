import React, { Component } from 'react';

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div className='header'>
        <span className='header__logo'>Contacts</span>
        <span className='header__theme-switcher' />
      </div>
    );
  }
}

export default Header;
