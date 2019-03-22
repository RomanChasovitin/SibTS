import React, { Component, Fragment } from 'react';
import { Provider } from 'mobx-react';
import { autorun } from 'mobx';
import { ContactsStore } from './stores/ContactsStore';
import { ThemeStore } from './stores/ThemeStore';
import Template from './components/Template';

const contactsStore = new ContactsStore();
const themeStore = new ThemeStore();

autorun(() => {
  contactsStore.getContacts();
});

class App extends Component {
  render() {
    return (
      <Provider contactsStore={contactsStore} themeStore={themeStore}>
        <Template />
      </Provider>
    );
  }
}

export default App;
