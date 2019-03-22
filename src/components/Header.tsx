import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ThemeStore } from '../stores/ThemeStore';

export interface HeaderProps {
  themeStore?: ThemeStore;
}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    const { themeStore } = this.props;
    return (
      <div className='header'>
        <span className='header__logo'>Contacts</span>
        <span
          onClick={themeStore ? themeStore.changeTheme : () => {}}
          className={`header__theme-switcher ${
            themeStore
              ? themeStore.theme === 'light'
                ? 'header__theme-switcher--light'
                : 'header__theme-switcher--dark'
              : null
          }`}
        />
      </div>
    );
  }
}

export default inject('themeStore')(observer(Header));
