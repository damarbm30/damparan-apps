import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { Loader, Missing, Navbar } from "~/components";
import {
  Dashboard,
  Home,
  Profile,
  AddPesantren,
  Pesantren,
  PesantrenList,
  PesantrenPage,
  PesantrenSearch,
} from "~/pages";
import { Login, Register } from "./features";
import { ProtectedRoutes, PublicRoutes } from "~/routes";

const App = () => {
  return (
    <main className="container">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route element={<Navbar />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/pesantren" element={<Pesantren />} />
              <Route path="/pesantren/all" element={<PesantrenList />} />
              <Route path="/pesantren/:id" element={<PesantrenPage />} />
              <Route path="/tambah-pesantren" element={<AddPesantren />} />
              <Route path="/pencarian" element={<PesantrenSearch />} />
            </Route>
          </Route>
          <Route path="*" element={<Missing />} />
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
