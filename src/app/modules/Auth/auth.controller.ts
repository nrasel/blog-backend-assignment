import httpStatus from 'http-status';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

const registerUser = catchAsync(async (req, res) => {
  //   const { ...passwordData } = req.body;
  const result = await AuthService.registerUser();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password changed succesfully!',
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  //   const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is reterived succesfully!',
    data: result,
  });
});

export const authController = {
  loginUser,
  registerUser,
  refreshToken,
};
