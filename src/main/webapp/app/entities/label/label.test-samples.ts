import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 31114,
  label: 'haptic Pizza Borders',
};

export const sampleWithPartialData: ILabel = {
  id: 18474,
  label: 'Kareem',
};

export const sampleWithFullData: ILabel = {
  id: 1307,
  label: 'indigo Bedfordshire',
};

export const sampleWithNewData: NewLabel = {
  label: 'Music man',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
