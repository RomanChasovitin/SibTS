import { observable, action, decorate } from 'mobx';
import { Contact } from '../interfaces';

export class ContactsStore {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  private getContactsWithLocalStorage() {
    const contacts = localStorage.getItem('contacts');
    let contactsArray: Contact[];
    contactsArray = contacts ? JSON.parse(contacts) : [];
    return contactsArray.length ? contactsArray : null;
  }

  private setContactsToLocalStorage(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  public getContacts() {
    let contactsArray = this.getContactsWithLocalStorage();
    if (!contactsArray) {
      fetch('http://demo.sibers.com/users')
        .then(res => res.json())
        .then(res => {
          this.contacts = res;
          this.setContactsToLocalStorage(res);
        });
      return;
    }
    this.contacts = contactsArray;
  }
}

decorate(ContactsStore, {
  contacts: observable,
  getContacts: action,
});
