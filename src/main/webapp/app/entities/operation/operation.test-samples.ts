import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 18648,
  date: dayjs('2015-08-04T15:27'),
  amount: 1875.88,
};

export const sampleWithPartialData: IOperation = {
  id: 11346,
  date: dayjs('2015-08-04T13:07'),
  amount: 26714.4,
};

export const sampleWithFullData: IOperation = {
  id: 10114,
  date: dayjs('2015-08-05T00:46'),
  description: 'except',
  amount: 10345.07,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T18:13'),
  amount: 10098.31,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
