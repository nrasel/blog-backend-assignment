"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("../blog/blog.model");
const user_model_1 = require("../users/user.model");
const blockUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(id);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is not found!');
    }
    if (user.isBlocked === true) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'This user is already blocked!');
    }
    const blockUser = yield user_model_1.User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
    return blockUser;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.Blog.findById(id);
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This blog is not found!');
    }
    const result = blog_model_1.Blog.findByIdAndDelete(id);
    return result;
});
exports.AdminService = {
    blockUser,
    deleteBlog,
};
