import { NavLink, Outlet } from "react-router-dom";

import { dashboard, home, pesantren, board, profile } from "~/assets";

const items = [
  {
    id: 1,
    link: "/",
    name: "Home",
    img: home,
  },
  {
    id: 2,
    link: "/pesantren",
    name: "Pesantren",
    img: pesantren,
  },
  {
    id: 3,
    link: "/tambah-pesantren",
    name: "Tambah",
    img: board,
  },
  {
    id: 4,
    link: "/dashboard",
    name: "Dashboard",
    img: dashboard,
  },
  {
    id: 5,
    link: "/profile",
    name: "Profile",
    img: profile,
  },
];

const Navbar = () => {
  return (
    <>
      <Outlet />
      <nav className="fixed bottom-0 left-1/2 right-1/2 z-[99999] w-full -translate-x-1/2 rounded-t-[40px] bg-white px-5 py-3 shadow-[0_-7px_80px_-10px_rgba(0,0,0,0.2)] sm:w-auto sm:min-w-[375px]">
        <div className="flex justify-evenly gap-4">
          {items.map((item) => {
            const { id, link, name, img } = item;

            return (
              <NavLink key={id} to={link}>
                <button className="flex flex-col gap-1">
                  <div className="mx-auto h-[25px] w-[25px]">
                    <img src={img} alt="name" className="w-full" width={25} height={25} />
                  </div>
                  <p className="text-xs">{name}</p>
                </button>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
