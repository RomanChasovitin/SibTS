export interface Contact {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  avatar?: string;
  website: string;
  favorite: boolean;
}

export interface Address {
  streetA: string;
  streetB: string;
  streetC: string;
  streetD: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}
