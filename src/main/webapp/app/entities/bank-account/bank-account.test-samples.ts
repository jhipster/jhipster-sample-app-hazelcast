import { IBankAccount, NewBankAccount } from './bank-account.model';

export const sampleWithRequiredData: IBankAccount = {
  id: 12608,
  name: 'campus initialize',
  balance: 3530.3,
};

export const sampleWithPartialData: IBankAccount = {
  id: 16526,
  name: 'mechanically doff',
  balance: 3462.8,
};

export const sampleWithFullData: IBankAccount = {
  id: 15617,
  name: 'proliferation fawn',
  balance: 28738.33,
};

export const sampleWithNewData: NewBankAccount = {
  name: 'amid',
  balance: 18871.6,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
