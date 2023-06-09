import { Link, useParams } from "react-router-dom";

import { Searchbar } from "~/components";
import { useGetPesantrenQuery } from "~/app/api/apiSlice";

const PesantrenPage = () => {
  const { id } = useParams();
  const { data: pesantrenApi, isLoading, isSuccess, isError, error } = useGetPesantrenQuery();

  let currentPesantren;
  let pesantren, yayasan, deskripsi, pendidikan, alamat, fasilitas, foto;

  if (isSuccess) {
    currentPesantren = pesantrenApi?.find((pesantren) => id === pesantren.pesantren_id.toString());
    ({ pesantren, yayasan, deskripsi, pendidikan, alamat, fasilitas, foto } = currentPesantren);
  }
  console.log(currentPesantren);

  return (
    <section>
      <div className="mb-6">
        <Searchbar />
      </div>
      <img src={foto || null} alt={pesantren} width={365} height={500} className="mb-4 min-w-full rounded-2xl" />
      <h1 className="text-2xl font-bold">{pesantren}</h1>
      <h2 className="mb-3 text-lg">{yayasan}</h2>
      <p className="mb-4 text-sm font-light">{deskripsi}</p>
      <h3 className="text-sm font-bold">Fasilitas</h3>
      <ul className="mb-4 text-sm font-light">
        {fasilitas?.length > 0 &&
          fasilitas?.map((item, idx) => {
            return (
              <li key={idx} className="ml-4 list-disc">
                {item.fasilitas_name.trim().charAt(0).toUpperCase() + item.fasilitas_name.trim().slice(1)}
              </li>
            );
          })}
      </ul>
      <h3 className="text-sm font-bold">Lembaga Pendidikan</h3>
      <ul className="mb-3 text-sm font-light">
        {pendidikan?.length > 0 &&
          pendidikan?.map((item, idx) => {
            return (
              <li key={idx} className="ml-4 list-disc">
                {item.pendidikan_name.trim().charAt(0).toUpperCase() + item.pendidikan_name.trim().slice(1)}
              </li>
            );
          })}
      </ul>
      <h3 className="text-sm font-bold">Alamat</h3>
      <p className="mb-3 text-sm font-light">{alamat}</p>
      <button className="mb-14 flex">
        <Link type="button" className="btn bg-primary">
          Lihat Lokasi
        </Link>
      </button>
      <button className="mx-auto w-full">
        <Link type="button" className="btn bg-primary">
          Kunjungi Laman Pesantren
        </Link>
      </button>
    </section>
  );
};
export default PesantrenPage;
