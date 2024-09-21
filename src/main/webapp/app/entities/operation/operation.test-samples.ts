import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 19303,
  date: dayjs('2015-08-04T16:21'),
  amount: 13110.84,
};

export const sampleWithPartialData: IOperation = {
  id: 7522,
  date: dayjs('2015-08-04T13:48'),
  description: 'expansion',
  amount: 26273.82,
};

export const sampleWithFullData: IOperation = {
  id: 11690,
  date: dayjs('2015-08-04T20:18'),
  description: 'morbidity',
  amount: 24916.5,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T10:29'),
  amount: 7244.1,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
