import dayjs from 'dayjs/esm';

import { IOperation, NewOperation } from './operation.model';

export const sampleWithRequiredData: IOperation = {
  id: 10038,
  date: dayjs('2015-08-04T21:20'),
  amount: 13306.02,
};

export const sampleWithPartialData: IOperation = {
  id: 14960,
  date: dayjs('2015-08-05T12:02'),
  description: 'gah whoa',
  amount: 8688.27,
};

export const sampleWithFullData: IOperation = {
  id: 6341,
  date: dayjs('2015-08-05T11:44'),
  description: 'hmph equalize',
  amount: 9645.97,
};

export const sampleWithNewData: NewOperation = {
  date: dayjs('2015-08-05T09:10'),
  amount: 18897.82,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
