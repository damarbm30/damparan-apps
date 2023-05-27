import { Route, Routes } from "react-router-dom";

import { Navbar } from "~/components";
import { Home, Login, PesantrenForm, PesantrenList, PesantrenPage, PesantrenSearch } from "~/pages";

const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route element={<Navbar />}>
          <Route index path="/login" element={<Login />} />
          <Route index path="/" element={<Home />} />
          <Route index path="/pesantren" element={<PesantrenList />} />
          <Route index path="/pesantren/:id" element={<PesantrenPage />} />
          <Route index path="/tambah-pesantren" element={<PesantrenForm />} />
          <Route index path="/pencarian" element={<PesantrenSearch />} />
        </Route>
      </Routes>
    </main>
  );
};
export default App;
