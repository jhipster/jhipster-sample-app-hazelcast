import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '59ee653e-8c6c-4db3-8772-3cc8233c0f26',
};

export const sampleWithPartialData: IAuthority = {
  name: 'cab9694e-6e0c-4276-98ed-b6a1220f0f1d',
};

export const sampleWithFullData: IAuthority = {
  name: 'b05cb3f1-3028-4de2-a29e-89bb18cee1af',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
