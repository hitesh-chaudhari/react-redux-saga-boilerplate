import { AUTHENTICATE } from './constants';

export function authenticate(email, password) {
  return {
    type: AUTHENTICATE,
    email,
    password,
  };
}
