import { UPDATE } from './constants';

export const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}
