"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../modules/Auth/auth.routes");
const user_routes_1 = require("../modules/users/user.routes");
const admin_routes_1 = require("../modules/Admin/admin.routes");
const blog_routes_1 = require("../modules/blog/blog.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.userRoutes,
    },
    {
        path: '/blogs',
        route: blog_routes_1.blogRoutes,
    },
    {
        path: '/auth',
        route: auth_routes_1.authRoutes,
    },
    {
        path: '/admin',
        route: admin_routes_1.adminRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
