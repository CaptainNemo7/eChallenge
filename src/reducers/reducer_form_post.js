import { SUBMIT_FORM1, SUBMIT_FORM2, SUBMIT_FORM3 } from '../actions/index';

const INITIAL_STATE = {test: 'start'};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
  case SUBMIT_FORM1:
    return action.payload;
  case SUBMIT_FORM2:
    return action.payload;
  case SUBMIT_FORM3:
    return action.payload;
  default:
    return state;
  }
}
