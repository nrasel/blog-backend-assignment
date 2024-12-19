import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utility/catchAsync';
import sendResponse from '../../utility/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(
    req.body,
    req?.user?.userId,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfuly!!!',
    data: {
      id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});
const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog reterived reterived successfuly!!!',
    data: result,
  });
});

const getSingleBlog: RequestHandler = catchAsync(async (req, res) => {
  //   const id = req.params.id;
  const result = await BlogServices.getSingleBlogFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog reterived successfuly!!!',
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  await BlogServices.deleteBlogFromDB(id);

  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfuly!!!',
    statusCode: httpStatus.OK,
    data: {},
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BlogServices.updateBlogFromDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfuly!!!',
    data: {
      id: result?.id,
      title: result?.title,
      content: result?.content,
      author: result?.author,
    },
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  deleteBlog,
  updateBlog,
};
