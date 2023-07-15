import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 38477,
  name: 'except Jersey',
  balance: 93969,
};

export const sampleWithPartialData: IBankAccount = {
  id: 12377,
  name: 'Manager Gorgeous',
  balance: 50434,
};

export const sampleWithFullData: IBankAccount = {
  id: 59072,
  name: 'henry Ebony',
  balance: 99432,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'Incredible Northwest virtual',
  balance: 3841,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
