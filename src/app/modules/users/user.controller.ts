import { RequestHandler } from 'express';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is reterived successfuly',
    data: result,
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is reterived successfuly',
    data: result,
  });
});

const getSingleUser: RequestHandler = catchAsync(async (req, res) => {
  //   const id = req.params.id;
  const result = await UserServices.getSingleUserFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is reterived successfuly',
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  //   const id = req.params.id;
  const result = await UserServices.deleteUserFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student deleted successfuly',
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
  //   const id = req.params.id;

  const result = await UserServices.updateUserFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student updated successfuly',
    data: result,
  });
});

export const blogController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
};
