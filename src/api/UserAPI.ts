import BaseAPI from './BaseAPI';

export interface IProfileData {
  first_name: 'string';
  second_name: 'string';
  display_name: 'string';
  login: 'string';
  email: 'string';
  phone: 'string';
}

export default class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  create = undefined;

  read = undefined;

  update(profile: IProfileData): Promise<unknown> {
    return this.http.put('/profile', profile);
  }

  delete = undefined;
}
