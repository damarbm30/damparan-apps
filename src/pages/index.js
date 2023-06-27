import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const Home = lazy(() => import("./Home/Home"));
const Profile = lazy(() => import("./Profile/Profile"));
const Register = lazy(() => import("./Register/Register"));
const AddPesantren = lazy(() => import("./AddPesantren/AddPesantren"));
const Pesantren = lazy(() => import("./Pesantren/Pesantren"));
const PesantrenList = lazy(() => import("./PesantrenList/PesantrenList"));
const PesantrenPage = lazy(() => import("./PesantrenPage/PesantrenPage"));
const PesantrenSearch = lazy(() => import("./PesantrenSearch/PesantrenSearch"));

export {
  Dashboard,
  Home,
  Profile,
  Register,
  AddPesantren,
  Pesantren,
  PesantrenList,
  PesantrenPage,
  PesantrenSearch,
};
