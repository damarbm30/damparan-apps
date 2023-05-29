import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Carousel, Search, Title } from "~/components";
import { listPesantren, listPromo } from "~/constants/dummy";
import { useGetPesantrenQuery } from "../../app/api/apiSlice";

const Home = () => {
  const { data: pesantren, isLoading, isSuccess, isError, error } = useGetPesantrenQuery();

  console.log(pesantren);
  console.log("ERROR STATUS: ", isError);
  console.log("ERROR MESSAGE: ", error);

  return (
    <section>
      <Title hideButton>Beranda</Title>
      <Search />
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
