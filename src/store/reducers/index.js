import { combineReducers } from 'redux'
import user from './user'
import login from './login'

const Store = combineReducers({
  user,
  login
})

export default Store