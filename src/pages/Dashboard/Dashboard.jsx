import { useEffect, useState } from "react";

import Table from "./Table";
import { Loader, Modal, Pagination } from "~/components";
import { powerOff } from "~/assets";
import { useGetPesantrenQuery, useDeletePesantrenMutation } from "~/app/api/apiSlice";

const Dashboard = () => {
  const [filterTimeout, setFilterTimeout] = useState(null);
  const [active, setActive] = useState("informasi");
  const [showModal, setShowModal] = useState(false);
  const [rowId, setRowId] = useState(null);
  const { data: pesantrenApiData, isLoading } = useGetPesantrenQuery();
  const [deletePesantren, { isSuccess: isDeleteSuccess }] = useDeletePesantrenMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const [pesantrenPerPage, setPesantrenPerPage] = useState(5);

  const lastIndex = pesantrenPerPage * currentPage;
  const firstIndex = lastIndex - pesantrenPerPage;
  const currentPesantren = pesantrenApiData?.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 1; i <= Math.ceil(pesantrenApiData?.length / pesantrenPerPage); i++) {
    pages.push(i);
  }

  const handleFilterChange = (params) => {
    clearTimeout(filterTimeout);

    setFilterTimeout(
      setTimeout(() => {
        setActive(params);
      }, 500)
    );
  };

  const handleModalToggle = (params) => {
    setShowModal(true);
    setRowId(params);
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      setShowModal(false);
    }
  }, [isDeleteSuccess]);

  return (
    <>
      <section>
        <header className="mb-9 flex flex-col items-center justify-between md:flex-row">
          <h1 className="mb-5 text-center text-2xl font-bold md:mb-0 md:text-4xl">Daftar Pesantren di Yogyakarta</h1>
          <div className="flex gap-2">
            <button className="btn bg-primary">Admin</button>
            <button className="btn bg-danger p-3">
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
        {isLoading ? (
          <Loader />
        ) : (
          <div className="overflow-x-auto pb-4">
            <Table
              active={active}
              isLoading={isLoading}
              pesantrenApiData={currentPesantren}
              handleModalToggle={handleModalToggle}
            />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
          </div>
        )}
      </section>
      <Modal showModal={showModal}>
        <p className="my-4 text-lg leading-relaxed text-slate-500">Anda ingin menghapus data pesantren ini?</p>
        <div className="flex justify-center gap-3">
          <button className="btn bg-muted" type="button" onClick={() => setShowModal(false)}>
            Kembali
          </button>
          <button type="button" className="btn bg-danger" onClick={() => deletePesantren(rowId)}>
            Ya
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Dashboard;
