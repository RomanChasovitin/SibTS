import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Routes from '../routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { ThemeStore } from '../stores/ThemeStore';

export interface TemplateProps {
  themeStore?: ThemeStore;
}

const Template: React.SFC<TemplateProps> = props => {
  const { themeStore } = props;
  return (
    <React.Fragment>
      <div
        className={`App ${
          themeStore
            ? themeStore.theme === 'light'
              ? 'App--light'
              : 'App--dark'
            : null
        }`}
      >
        <React.Fragment>
          <Header />
          <Router>
            <React.Fragment>
              <Routes />
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};

export default inject('themeStore')(observer(Template));
