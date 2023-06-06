import { Pagination } from "~/components";
import Table from "./Table";
import { powerOff } from "~/assets";

const Dashboard = () => {
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
      <div className="overflow-x-scroll pb-4">
        <Table />
        {/* <Pagination /> */}
      </div>
    </section>
  );
};
export default Dashboard;
