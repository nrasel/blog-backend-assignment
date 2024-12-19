import QueryBuilder from '../../builder/QueryBuilder';
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
const getAllBlogFromDB = async (query: Record<string, unknown>) => {
  const blogSearchableField = ['title', 'content'];
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .searches(blogSearchableField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;

  return result;
};
const getSingleBlogFromDB = async () => {};

export const BlogServices = {
  getAllBlogFromDB,
  getSingleBlogFromDB,
  deleteBlogFromDB,
  updateBlogFromDB,
  createBlogIntoDB,
};
