import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, KartaNU, Pemberitahuan, Pesantren, Profil, InfoPesantren } from "~/pages";
import { Navbar } from "~/components";

const App = () => {
  const [data, setData] = useState({});

  return (
    <main className="container">
      <Routes>
        <Route element={<Navbar />}>
          {/* <Route index path="/" element={<Home />} /> */}
          {/* <Route index path="/karta-nu" element={<KartaNU />} /> */}
          {/* <Route index path="/pemberitahuan" element={<Pemberitahuan />} /> */}
          <Route index path="/" element={<Pesantren />} />
          {/* <Route index path="/profil" element={<Profil />} /> */}
          <Route index path="/info-pesantren" element={<InfoPesantren />} />
        </Route>
      </Routes>
    </main>
  );
};
export default App;
