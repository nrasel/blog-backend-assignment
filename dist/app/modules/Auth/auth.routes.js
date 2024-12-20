"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("../users/user.validation");
const auth_controller_1 = require("./auth.controller");
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/register', (0, validateRequest_1.default)(user_validation_1.UserValidation.userValidationSchema), auth_controller_1.authController.registerUser);
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginValidationSchema), auth_controller_1.authController.loginUser);
exports.authRoutes = router;
