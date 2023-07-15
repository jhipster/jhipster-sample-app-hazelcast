import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 85460,
  date: dayjs('2015-08-04T17:39'),
  amount: 56555,
};

export const sampleWithPartialData: IOperation = {
  id: 64620,
  date: dayjs('2015-08-05T03:06'),
  amount: 22137,
};

export const sampleWithFullData: IOperation = {
  id: 45656,
  date: dayjs('2015-08-05T12:02'),
  description: 'amongst Yen',
  amount: 78305,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T03:47'),
  amount: 46693,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
