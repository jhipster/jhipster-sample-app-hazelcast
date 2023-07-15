import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 28003,
  date: dayjs('2015-08-04T17:39'),
  amount: 18532,
};

export const sampleWithPartialData: IOperation = {
  id: 21174,
  date: dayjs('2015-08-05T03:06'),
  description: 'Monaco',
  amount: 31690,
};

export const sampleWithFullData: IOperation = {
  id: 4796,
  date: dayjs('2015-08-05T02:38'),
  description: 'grey Concrete',
  amount: 1300,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-04T20:34'),
  amount: 5179,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
