import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: IBlog, userId: string) => {
  const blog = (await Blog.create({ ...payload, author: userId })).populate(
    'author',
  );
  return blog;
};
const updateBlogFromDB = async (id: string, payload: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).populate('author');
  return result;
};
const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id, { new: true });
  return result;
};
const getAllBlogFromDB = async () => {};
const getSingleBlogFromDB = async () => {};

export const BlogServices = {
  getAllBlogFromDB,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
  createBlogIntoDB,
};
