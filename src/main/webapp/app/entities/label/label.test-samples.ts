import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 18182,
  label: 'without ew',
};

export const sampleWithPartialData: ILabel = {
  id: 15151,
  label: 'everlasting ignorant',
};

export const sampleWithFullData: ILabel = {
  id: 20,
  label: 'hmph inasmuch into',
};

export const sampleWithNewData: NewLabel = {
  label: 'pace loyal abaft',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
