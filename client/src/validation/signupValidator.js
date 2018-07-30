import isEmpty from 'lodash.isempty';
import Validator from 'validator';

const signupValidator = (data) => {
  const errors = {};
  // Username validation
  if (!Validator.isAlpha(data.username)) {
    errors.username = 'Username should be alphabets';
  }
  if (!Validator.isAlpha(data.username.charAt(0))) {
    errors.username = 'Username should be alphabets';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required';
  }
  // Email validation
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email';
  }
  // Phone validation
  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone number is required';
  }
  //Password
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }
  if (!Validator.isLength(data.password, {
    min: 6, max: 50
  })) {
    errors.password = 'Password should be at least 6 characters';
  }
  //Confirm Password
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'You need to confirm password';
  }
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.password = 'Passwords don\'t match';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default signupValidator;
