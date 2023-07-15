import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 12608,
  name: 'except Skiles',
  balance: 13781,
};

export const sampleWithPartialData: IBankAccount = {
  id: 22823,
  name: 'nor',
  balance: 3530,
};

export const sampleWithFullData: IBankAccount = {
  id: 16526,
  name: 'optimizing huzzah',
  balance: 9028,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'virtual',
  balance: 32582,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
