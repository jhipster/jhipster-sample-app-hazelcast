import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 31114,
  label: 'since archaeology poorly',
};

export const sampleWithPartialData: ILabel = {
  id: 30191,
  label: 'embrace like heighten',
};

export const sampleWithFullData: ILabel = {
  id: 17794,
  label: 'fooey jot whimper',
};

export const sampleWithNewData: NewLabel = {
  label: 'outrageous so rabbi',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
