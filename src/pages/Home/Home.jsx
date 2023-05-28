import { Link } from "react-router-dom";

import { Carousel, Search, Title } from "~/components";
import { listPesantren, listPromo } from "~/constants/dummy";

const Home = () => {
  return (
    <section>
      <Title hideButton>Beranda</Title>
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Populer</p>
        <Link to="/" className="underline">
          Semua
        </Link>
      </div>
      <Carousel data={listPesantren} />
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Salafiyah</p>
        <Link to="/pesantren" className="underline">
          Semua
        </Link>
      </div>
      <Carousel data={listPromo} />
    </section>
  );
};
export default Home;
