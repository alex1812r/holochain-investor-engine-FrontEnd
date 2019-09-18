import {combineReducers} from 'redux'

const login = (state = {logged:false} , action) => {
  if(action.type === 'SIGNIN' || action.type === 'LOGGED'){
    return {logged:true}
  }
  if(action.type === 'LOGOUT'){
    return {logged:false}
  }
  return state
}

const user = (state = {}, action) => {
  if(action.type === 'SIGNIN' || action.type === 'LOGGED'){
    return action.data
  }
  if(action.type === 'EDIT_USER'){
    return action.data
  }
  return state
} 

export default combineReducers({
  login,
  user
})