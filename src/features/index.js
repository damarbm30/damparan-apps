import { lazy } from "react";

const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));

export { Login, Register };
