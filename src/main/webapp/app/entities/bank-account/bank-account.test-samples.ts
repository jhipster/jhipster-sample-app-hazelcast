import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 13348,
  name: 'gummy gee',
  balance: 8400.96,
};

export const sampleWithPartialData: IBankAccount = {
  id: 30581,
  name: 'hero ski ah',
  balance: 9219.09,
};

export const sampleWithFullData: IBankAccount = {
  id: 21737,
  name: 'prance end',
  balance: 17316.54,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'craft boulder',
  balance: 24807.63,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
