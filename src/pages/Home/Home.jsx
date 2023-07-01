import { Link } from "react-router-dom";

import { board, event, masjid, mubaligh, pesantren, registration, tanyakiai } from "~/assets";
import { Carousel, Searchbar } from "~/components";
import { listPesantren, listPromo } from "~/constants/dummy";

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
    img: event,
    name: "Kegiatan",
    link: "/",
  },
  {
    img: tanyakiai,
    name: "Tanyakiai",
    link: "https://tanyakiai.id/",
  },
  {
    img: registration,
    name: "Pendaftaran",
    link: "/",
  },
];

const Home = () => {
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
