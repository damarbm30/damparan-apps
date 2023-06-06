import { Route, Routes } from "react-router-dom";

import { Loader, Navbar } from "~/components";
import { Dashboard, Home, Login } from "~/pages";
import { AddPesantren, Pesantren, PesantrenList, PesantrenPage, PesantrenSearch } from "./features/pesantren";
import { Suspense } from "react";

const App = () => {
  return (
    <main className="container">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/pesantren" element={<Pesantren />} />
            <Route path="/pesantren/all" element={<PesantrenList />} />
            <Route path="/pesantren/:id" element={<PesantrenPage />} />
            <Route path="/tambah-pesantren" element={<AddPesantren />} />
            <Route path="/pencarian" element={<PesantrenSearch />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
};
export default App;
