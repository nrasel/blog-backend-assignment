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
const catchAsync_1 = __importDefault(require("../../utility/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utility/sendResponse"));
const user_service_1 = require("./user.service");
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.createUserIntoDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User is reterived successfuly',
        data: result,
    });
}));
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserServices.getAllUserFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User is reterived successfuly',
        data: result,
    });
}));
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const id = req.params.id;
    const result = yield user_service_1.UserServices.getSingleUserFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User is reterived successfuly',
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const id = req.params.id;
    const result = yield user_service_1.UserServices.deleteUserFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User deleted successfuly',
        data: result,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const id = req.params.id;
    const result = yield user_service_1.UserServices.updateUserFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User updated successfuly',
        data: result,
    });
}));
exports.blogController = {
    createUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    updateUser,
};
