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

const selectedBlog = (state ={}, action) => {
  switch (action.type) {
    case 'SET_BLOG_DETAILS':
      return action.payload;
    default: 
      return state;
  }
}


const rootReducer = combineReducers({
  errors,
  user,
  blog,
  selectedBlog,
});

export default rootReducer;
