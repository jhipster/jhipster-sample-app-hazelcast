import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '4258679c-b0e4-44ac-9060-1d8a481e28bc',
};

export const sampleWithPartialData: IAuthority = {
  name: '212bbcff-0856-40a5-b801-542a0881c896',
};

export const sampleWithFullData: IAuthority = {
  name: 'f30e0aa7-1e83-47b4-9422-3be74c6b294b',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
