import { combineReducers } from 'redux';
import FormPost from './reducer_form_post';
// import ActiveBook from './reducer_active_list_item'

const rootReducer = combineReducers({
  list: FormPost
});

export default rootReducer;
