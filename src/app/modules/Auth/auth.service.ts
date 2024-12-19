import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';

const registerUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
const loginUser = async () => {};

const refreshToken = async () => {};

export const AuthService = {
  loginUser,
  registerUser,
  refreshToken,
};
