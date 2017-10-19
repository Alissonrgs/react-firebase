export const SET_USER = 'SET_USER'
export const SING_IN = 'SING_IN'
export const SING_OUT = 'SING_OUT'

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const singIn = (state) => ({
  type: SING_IN,
  state
})

export const singOut = (state) => ({
  type: SING_OUT,
  state
})
