import { Link } from "react-router-dom";

import { board, dots, koinNU, masjid, mubaligh, pesantren } from "~/assets";
import { Carousel, Searchbar } from "~/components";
import { listPesantren, listPromo } from "~/constants/dummy";
import { useGetPesantrenQuery } from "~/app/api/apiSlice";

const MENU = [
  {
    img: pesantren,
    name: "Pesantren",
    link: "/pesantren/all",
  },
  {
    img: masjid,
    name: "Masjid",
    link: "/",
  },
  {
    img: mubaligh,
    name: "Mubaligh",
    link: "/",
  },
  {
    img: board,
    name: "KartaNU",
    link: "/",
  },
  {
    img: koinNU,
    name: "Koin NU",
    link: "/",
  },
  {
    img: dots,
    name: "Lainnya",
    link: "/",
  },
];

const Home = () => {
  const { data: pesantrenApi, isLoading, isSuccess, isError, error } = useGetPesantrenQuery();

  console.log(pesantrenApi);

  return (
    <section>
      <div className="mb-7">
        <Searchbar />
      </div>
      <div className="mb-12 grid grid-cols-4 justify-items-center gap-6 md:grid-cols-6">
        {MENU.map((menu, idx) => {
          return (
            <Link
              key={idx}
              to={menu.link}
              className="relative flex w-fit flex-col items-center justify-center gap-y-2 pb-8 md:pb-12"
            >
              <img src={menu.img} alt={menu.name} width={48} height={48} />
              <p className="absolute bottom-0 whitespace-pre font-bold text-body">{menu.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Populer</p>
        <Link to="/" className="underline">
          Semua
        </Link>
      </div>
      <Carousel data={listPesantren} />
      <div className="mb-4 font-bold text-secondary">
        <p>Promo</p>
      </div>
      <Carousel data={listPromo} />
    </section>
  );
};
export default Home;
