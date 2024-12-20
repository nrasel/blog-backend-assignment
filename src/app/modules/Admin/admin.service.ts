import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from '../blog/blog.model';
import { User } from '../users/user.model';

const blockUser = async (id: string) => {
  const user = await User.findById(id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
  }

  if (user.isBlocked === true) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is already blocked!');
  }

  const blockUser = await User.findByIdAndUpdate(
    id,
    { isBlocked: true },
    { new: true },
  );

  return blockUser;
};

const deleteBlog = async (id: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(httpStatus.NOT_FOUND, 'This blog is not found!');
  }

  const result = Blog.findByIdAndDelete(id);
  return result;
};

export const AdminService = {
  blockUser,
  deleteBlog,
};
