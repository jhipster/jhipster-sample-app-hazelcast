import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 18486,
  login: 'r',
};

export const sampleWithPartialData: IUser = {
  id: 15380,
  login: 'If`8@AD\\}BOkhlA\\389W\\:aFe4\\lHk',
};

export const sampleWithFullData: IUser = {
  id: 32066,
  login: '_ktW',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
