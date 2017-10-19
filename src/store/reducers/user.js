import { SET_USER } from '../actions/index';

const initState = {
  user: {
    name: null,
    email: null,
    password: null
  }
}

const user = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = action.user
      return state
    default:
      return state
  }
}

export default user