export function errorSelector(state) {
  return state.services.account.error;
}

export function tokenSelector(state) {
  return state.services.account.token;
}

export function userSelector(state) {
  return state.services.account.id;
}
