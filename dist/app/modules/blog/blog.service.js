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
exports.BlogServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = (yield blog_model_1.Blog.create(Object.assign(Object.assign({}, payload), { author: userId }))).populate('author');
    return blog;
});
const updateBlogFromDB = (id, userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const blog = yield blog_model_1.Blog.findById(id);
    if (((_a = blog === null || blog === void 0 ? void 0 : blog.author) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Author do not matched!');
    }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    }).populate('author');
    return result;
});
const deleteBlogFromDB = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const blog = yield blog_model_1.Blog.findById(id);
    if (((_a = blog === null || blog === void 0 ? void 0 : blog.author) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Author do not matched!');
    }
    const result = yield blog_model_1.Blog.findByIdAndDelete(id, { new: true });
    return result;
});
const getAllBlogFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const blogSearchableField = ['title', 'content'];
    const blogQuery = new QueryBuilder_1.default(blog_model_1.Blog.find().populate('author'), query)
        .searches(blogSearchableField)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield blogQuery.modelQuery;
    return result;
});
exports.BlogServices = {
    getAllBlogFromDB,
    deleteBlogFromDB,
    updateBlogFromDB,
    createBlogIntoDB,
};
