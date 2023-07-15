import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 94955,
  label: 'haptic Sports Micronesia',
};

export const sampleWithPartialData: ILabel = {
  id: 56378,
  label: 'Hawaii',
};

export const sampleWithFullData: ILabel = {
  id: 54149,
  label: 'Steel SSL Diesel',
};

export const sampleWithNewData: NewLabel = {
  label: 'payment',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
