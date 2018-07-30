import jwt from 'jsonwebtoken';

const authenticateUser = () => {
  const token = localStorage.getItem('token') || global.token;
  if (token) {
    return jwt.verify(token, 'LANIYAN', ((error) => {
      if (error) {
        return false;
      }
      return true;
    }));
  }
  return false;
};
export default authenticateUser;
