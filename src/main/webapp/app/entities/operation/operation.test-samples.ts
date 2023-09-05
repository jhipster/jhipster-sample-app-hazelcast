import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 28003,
  date: dayjs('2015-08-04T17:39'),
  amount: 18531.52,
};

export const sampleWithPartialData: IOperation = {
  id: 21174,
  date: dayjs('2015-08-05T03:06'),
  description: 'keenly',
  amount: 25658.38,
};

export const sampleWithFullData: IOperation = {
  id: 12360,
  date: dayjs('2015-08-05T01:38'),
  description: 'distil',
  amount: 6341.72,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T11:44'),
  amount: 18917.39,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
