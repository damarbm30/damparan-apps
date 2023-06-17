import { lazy } from "react";

const AddPesantren = lazy(() => import("./AddPesantren/AddPesantren"));
const Pesantren = lazy(() => import("./Pesantren"));
const PesantrenList = lazy(() => import("./PesantrenList"));
const PesantrenPage = lazy(() => import("./PesantrenPage"));
const PesantrenSearch = lazy(() => import("./PesantrenSearch"));

export { AddPesantren, Pesantren, PesantrenList, PesantrenPage, PesantrenSearch };
