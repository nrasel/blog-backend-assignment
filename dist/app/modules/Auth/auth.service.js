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
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../users/user.model");
const auth_utils_1 = require("./auth.utils");
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email }).select('+password');
    if (!user) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'This user is not registered!');
    }
    if (user.isBlocked === true) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'This user is blocked!');
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Password do not matched!');
    }
    const jwtPayload = {
        userId: user === null || user === void 0 ? void 0 : user.id,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    return {
        token,
    };
});
exports.AuthService = {
    loginUser,
    registerUser,
};
