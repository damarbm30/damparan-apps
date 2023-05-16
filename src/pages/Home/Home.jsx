import { Link } from "react-router-dom";

import { Carousel, Search } from "~/components";
import { pesantren, masjid, mubaligh, kartaNU, koinNU, dots } from "~/assets";
import { listPesantren, listPromo } from "~/constants/dummy";

const menu = [
  {
    name: "Pesantren",
    img: pesantren,
    link: "/",
  },
  {
    name: "Masjid",
    img: masjid,
    link: "/",
  },
  {
    name: "Mubaligh",
    img: mubaligh,
    link: "/",
  },
  {
    name: "KartaNU",
    img: kartaNU,
    link: "/",
  },
  {
    name: "Koin NU",
    img: koinNU,
    link: "/",
  },
  {
    name: "Lainnya",
    img: dots,
    link: "/",
  },
];

const Home = () => {
  return (
    <section>
      <p className="font-bold text-body">Hi, Erlangga!</p>
      <div className="mb-6 mt-3">
        <Search />
      </div>
      <div className="mb-4 grid grid-cols-4 gap-x-6 gap-y-4 sm:grid-cols-5 md:grid-cols-6">
        {menu &&
          menu?.map((item, idx) => {
            const { name, img, link } = item;

            return (
              <Link
                to={link}
                key={idx}
                className="mx-auto flex w-fit flex-col gap-1"
              >
                <div className="mx-auto flex h-[50px] w-[50px] items-center">
                  <img
                    src={img}
                    alt={name}
                    className="w-full"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-center font-semibold text-body">{name}</p>
              </Link>
            );
          })}
      </div>
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Populer</p>
        <p className="underline">Semua</p>
      </div>
      <Carousel data={listPesantren} />
      <p className="mb-4 font-bold text-secondary">Promo</p>
      <Carousel data={listPromo} />
    </section>
  );
};
export default Home;
