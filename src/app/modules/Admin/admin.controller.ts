import httpStatus from 'http-status';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AdminService } from './admin.service';

const blockUser = catchAsync(async (req, res) => {
  const result = await AdminService.blockUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked succesfully!',
    data: result,
  });
});

const deleteBlock = catchAsync(async (req, res) => {
  //   const { ...passwordData } = req.body;
  const result = await AdminService.deleteBlog();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted succesfully!',
    data: result,
  });
});

export const authController = {
  blockUser,
  deleteBlock,
};
