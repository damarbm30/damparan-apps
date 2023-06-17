import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const Login = lazy(() => import("./Login/Login"));
const Profile = lazy(() => import("./Profile/Profile"));

export { Dashboard, Home, Login, Profile };
