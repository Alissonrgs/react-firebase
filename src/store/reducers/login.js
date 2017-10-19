import { SING_IN, SING_OUT } from '../actions/index';

const login = (state = false, action) => {
  switch (action.type) {
    case SING_IN:
      state = true
      return state.logged
    case SING_OUT:
      state = false
      return state.logged
    default:
      return state
  }
}

export default login