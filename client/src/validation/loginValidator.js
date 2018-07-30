import Validator from 'validator';
import isEmpty from 'lodash.isempty';

const loginValidator = (data) => {
  const errors = {};
  //username
  if (!Validator.isAlpha(data.username)) {
    errors.username = 'Username should be alphabets';
  }
  if (!Validator.isAlpha(data.username.charAt(0))) {
    errors.username = 'Username should be alphabets';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }
  //password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
export default loginValidator;
