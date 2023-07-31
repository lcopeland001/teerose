import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';

const blog = (state = [], action) => {
  switch (action.type) {
      case 'SET_BLOG':
        return action.payload;
      default:
        return state;  
  }
}


const rootReducer = combineReducers({
  errors,
  user,
  blog,
});

export default rootReducer;
