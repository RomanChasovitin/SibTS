import React, { Component, Fragment } from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'mobx-react';
import { autorun } from 'mobx';
import { ContactsStore } from './stores/ContactsStore';

const contactsStore = new ContactsStore();

autorun(() => {
  contactsStore.getContacts();
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider contactsStore={contactsStore}>
          <Fragment>
            <Header />
            <Router>
              <Fragment>
                <Routes />
              </Fragment>
            </Router>
          </Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
