import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: IBlog, userId: string) => {
  const blog = new Blog({ ...payload, author: userId });
  await blog.save();
  return blog;
};
const getAllBlogFromDB = async () => {};
const getSingleBlogFromDB = async () => {};
const updateBlogFromDB = async () => {};
const deleteBlogFromDB = async () => {};

export const BlogServices = {
  getAllBlogFromDB,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
  createBlogIntoDB,
};
