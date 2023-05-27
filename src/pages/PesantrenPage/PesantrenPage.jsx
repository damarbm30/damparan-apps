import { Link, useParams } from "react-router-dom";

import { Searchbar } from "~/features";
import { pesantrenSalafiyah } from "~/constants/dummy";

const PesantrenPage = () => {
  const { id } = useParams();
  const pesantren = pesantrenSalafiyah.find((pesantren) => id === pesantren.id.toString());
  const { nama, yayasan_pengasuh, deskripsi, pendidikan, alamat, kecamatan, kabupaten, fasilitas, foto } = pesantren;

  return (
    <section>
      <div className="mb-6">
        <Searchbar />
      </div>
      <img src={foto} alt={nama} width={365} height={500} className="mb-4 min-w-full rounded-2xl" />
      <h1 className="text-2xl font-bold">{nama}</h1>
      <h2 className="mb-3 text-lg">{yayasan_pengasuh}</h2>
      <p className="mb-4 text-sm font-light">{deskripsi}</p>
      <h3 className="text-sm font-bold">Fasilitas</h3>
      <ul className="mb-4 text-sm font-light">
        {fasilitas.split(",").map((item, idx) => {
          return (
            <li key={idx} className="ml-4 list-disc">
              {item.trim().charAt(0).toUpperCase() + item.trim().slice(1)}
            </li>
          );
        })}
      </ul>
      <h3 className="text-sm font-bold">Lembaga Pendidikan</h3>
      <ul className="mb-3 text-sm font-light">
        {pendidikan.map((item, idx) => {
          return (
            <li key={idx} className="ml-4 list-disc">
              {item.trim().charAt(0).toUpperCase() + item.trim().slice(1)}
            </li>
          );
        })}
      </ul>
      <h3 className="text-sm font-bold">Alamat</h3>
      <p className="mb-3 text-sm font-light">{alamat}</p>
      <Link type="button" className="btn mb-14 bg-primary">
        Lihat Lokasi
      </Link>
      <Link type="button" className="btn mx-auto block w-fit bg-primary">
        Kunjungi Laman Pesantren
      </Link>
    </section>
  );
};
export default PesantrenPage;
