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
exports.blogController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utility/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utility/sendResponse"));
const blog_service_1 = require("./blog.service");
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield blog_service_1.BlogServices.createBlogIntoDB(req.body, (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Blog created successfuly!!!',
        data: {
            id: result._id,
            title: result.title,
            content: result.content,
            author: result.author,
        },
    });
}));
const getAllBlogs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_service_1.BlogServices.getAllBlogFromDB(req.query);
    const mappedData = result.map((blog) => ({
        _id: blog._id,
        title: blog.title,
        content: blog.title,
        author: blog.author,
    }));
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Blog reterived reterived successfuly!!!',
        data: mappedData,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield blog_service_1.BlogServices.deleteBlogFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'Blog deleted successfuly!!!',
        statusCode: http_status_1.default.OK,
    });
}));
const updateBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.BlogServices.updateBlogFromDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Blog updated successfuly!!!',
        data: {
            id: result === null || result === void 0 ? void 0 : result.id,
            title: result === null || result === void 0 ? void 0 : result.title,
            content: result === null || result === void 0 ? void 0 : result.content,
            author: result === null || result === void 0 ? void 0 : result.author,
        },
    });
}));
exports.blogController = {
    createBlog,
    getAllBlogs,
    deleteBlog,
    updateBlog,
};
