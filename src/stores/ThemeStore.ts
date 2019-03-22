import { observable, action, decorate } from 'mobx';

export class ThemeStore {
  theme = 'light';

  public changeTheme = () => {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  };
}

decorate(ThemeStore, {
  theme: observable,
  changeTheme: action,
});
