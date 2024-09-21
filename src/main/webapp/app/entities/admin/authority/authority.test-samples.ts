import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4569be4c-6184-412b-951b-cf86a814a818',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f00a1874-23e4-4624-95c4-61d58cecf5b8',
};

export const sampleWithFullData: IAuthority = {
  name: 'e962fc54-a322-46e8-a447-939bb30c137f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
