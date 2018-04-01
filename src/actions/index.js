import axios from 'axios';

export const SUBMIT_FORM1 = 'FORM_1';
export const SUBMIT_FORM2 = 'FORM_2';
export const SUBMIT_FORM3 = 'FORM_3';


export function postForm1(userInfo) {
	axios.post('http://localhost:4568/form1', userInfo )
		.then(res => {
			console.log(' form 1 ',res);
			return res;
		})
    .catch(error => {
      console.log('error: ', error);
      return null;
    })

	console.log('postForm1 - src/actions : ', userInfo)
  return {
    type: 'FORM_1',
    payload: null
  }
}

export function postForm2(userInfo) {
	const sendUser = axios.post(userInfo)
		.then(res => {
			console.log(' form 2 ',res);
			return res;
		})
  console.log('postForm2 - src/actions : ', userInfo)

  return {
    type: 'FORM_2',
    payload: sendUser
  }
}

export function postForm3(userInfo) {
	const sendUser = axios.post(userInfo)
		.then(res => {
			console.log(' form3 ',res);
			return res;
		})
  return {
    type: 'FORM_3',
    payload: sendUser
  }
}