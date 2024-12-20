import httpStatus from 'http-status';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { AdminService } from './admin.service';

const blockUser = catchAsync(async (req, res) => {
  await AdminService.blockUser(req.params.userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked succesfully!',
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  await AdminService.deleteBlog(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted succesfully!',
  });
});

export const adminController = {
  blockUser,
  deleteBlog,
};
