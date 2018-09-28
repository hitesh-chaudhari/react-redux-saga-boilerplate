import { ACTIVATE, REGISTER, UPDATE, INTEREST } from './constants';

export function activate(token, password) {
  return {
    type: ACTIVATE,
    token,
    password,
  };
}

export function register(name, email) {
  return {
    type: REGISTER,
    name,
    email,
  };
}

export function update(data) {
  return {
    type: UPDATE,
    data,
  };
}

export function interest(name, email) {
  return {
    type: INTEREST,
    name,
    email,
  };
}
