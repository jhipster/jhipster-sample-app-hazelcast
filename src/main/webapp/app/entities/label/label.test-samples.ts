import { ILabel, NewLabel } from './label.model';

export const sampleWithRequiredData: ILabel = {
  id: 27047,
  label: 'sauerkraut enrich',
};

export const sampleWithPartialData: ILabel = {
  id: 8948,
  label: 'hyphenation manner mild',
};

export const sampleWithFullData: ILabel = {
  id: 22795,
  label: 'though bleakly',
};

export const sampleWithNewData: NewLabel = {
  label: 'relative',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
