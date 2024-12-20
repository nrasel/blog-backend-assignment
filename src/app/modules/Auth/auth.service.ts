import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { IUser } from '../users/user.interface';
import { User } from '../users/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const registerUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};
const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  if (user.isBlocked === true) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!');
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched!');
  }

  const jwtPayload = {
    userId: user?.id,
    email: user?.email,
    role: user?.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    token,
  };
};

export const AuthService = {
  loginUser,
  registerUser,
};
