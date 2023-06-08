import { useState } from "react";

import { Pagination } from "~/components";
import Table from "./Table";
import { powerOff } from "~/assets";

const Dashboard = () => {
  const [filterTimeout, setFilterTimeout] = useState(null);
  const [active, setActive] = useState("informasi");

  const handleFilterChange = (option) => {
    clearTimeout(filterTimeout);

    setFilterTimeout(
      setTimeout(() => {
        setActive(option);
      }, 500)
    );
  };

  return (
    <section>
      <header className="mb-9 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Daftar Pesantren di Yogyakarta</h1>
        <div className="flex gap-2">
          <button className="btn bg-primary">Admin</button>
          <button className="btn bg-[#DC3F2A] p-3">
            <img src={powerOff} alt="power off shutdown" width={18} height={18} />
          </button>
        </div>
      </header>
      {/* filter */}
      <div className="mb-4 flex items-center gap-4">
        <p>Filter by:</p>
        <select
          className="appearance-none rounded-md border px-2 py-1 shadow-md"
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="informasi">Informasi Pesantren</option>
          <option value="keilmuan">Keilmuan Pesantren</option>
          <option value="pendidikan">Lembaga Pendidikan</option>
          <option value="tambahan">Informasi Tambahan</option>
        </select>
      </div>
      <div className="overflow-x-auto pb-4">
        <Table active={active} />
        {/* <Pagination /> */}
      </div>
    </section>
  );
};
export default Dashboard;
