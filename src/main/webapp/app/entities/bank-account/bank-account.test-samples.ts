import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 31829,
  name: 'mouser',
  balance: 24337.1,
};

export const sampleWithPartialData: IBankAccount = {
  id: 5037,
  name: 'merit',
  balance: 5716.3,
};

export const sampleWithFullData: IBankAccount = {
  id: 22887,
  name: 'before along',
  balance: 26243.16,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'when tidy',
  balance: 4208.08,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
