import { useEffect, useState } from "react";

import { minus } from "~/assets";

const INFORMASI_HEADER = [
  "Nama Pesantren",
  "Nama Yayasan",
  "Pendiri",
  "Pengasuh Sekarang",
  "Daftar Pengasuh",
  "Alamat",
  "Aksi",
];

const KEILMUAN_HEADER = ["Nama Pesantren", "Nama Yayasan", "Sanad Keilmuan", "Spesifikasi Ta'lim", "Alamat"];

const PENDIDIKAN_HEADER = [
  "Nama Pesantren",
  "Lembaga Pendidikan Formal",
  "Lembaga Pendidikan Nonformal",
  "Lembaga Pendidikan",
  "Lain-Lain",
];

const TAMBAHAN_HEADER = ["Nama Pesantren", "Unit Usaha Pesantren", "Link Google Maps", "Media Pesantren"];

const InformasiData = ({
  id,
  pesantren,
  yayasan,
  pendiri,
  pengasuh,
  daftarPengasuh,
  alamat,
  className,
  handleModalToggle,
}) => {
  return (
    <>
      <td className={className}>{pesantren}</td>
      <td className={className}>{yayasan}</td>
      <td className={className}>{pendiri}</td>
      <td className={className}>{pengasuh}</td>
      <td className={`${className} w-fit`}>
        {daftarPengasuh.map((pengasuh, idx) => {
          return <li key={idx}>{pengasuh.pengasuh_name}</li>;
        })}
      </td>
      <td className={className}>{alamat}</td>
      <td className={className}>
        <button className="flex w-full justify-center" onClick={() => handleModalToggle(id)}>
          <img src={minus} alt="delete button" width={20} height={20} />
        </button>
      </td>
    </>
  );
};

const KeilmuanData = ({ className }) => {
  return (
    <>
      <td className={className}>PP Ali Maksum</td>
      <td className={className}>Yayasan Ali Maksum</td>
      <td className={className}>Sanad Keilmuan</td>
      <td className={className}>Spesifikasi Ta'lim</td>
      <td className={className}>Jl. KH. Ali Maksum Gg. Mawar No.RT.06, Krapyak Kulon, Panggungharjo, </td>
    </>
  );
};

const PendidikanData = ({ className }) => {
  return (
    <>
      <td className={className}>PP Ali Maksum</td>
      <td className={className}>Lembaga Pendidikan Formal</td>
      <td className={className}>Lembaga Pendidikan Nonformal</td>
      <td className={className}>Lembaga Pendidikan</td>
      <td className={className}>Lain-Lain</td>
    </>
  );
};

const TambahanData = ({ className }) => {
  return (
    <>
      <td className={className}>PP Ali Maksum</td>
      <td className={className}>Koperasi</td>
      <td className={className}>Link Google Maps</td>
      <td className={className}>Media Pesantren</td>
    </>
  );
};

const Table = ({ active, handleModalToggle, pesantrenApiData }) => {
  const [header, setHeader] = useState(INFORMASI_HEADER);

  useEffect(() => {
    switch (active) {
      case "informasi":
        setHeader(INFORMASI_HEADER);
        break;
      case "keilmuan":
        setHeader(KEILMUAN_HEADER);
        break;
      case "pendidikan":
        setHeader(PENDIDIKAN_HEADER);
        break;
      case "tambahan":
        setHeader(TAMBAHAN_HEADER);
        break;
      default:
        break;
    }
  }, [active]);

  return (
    <table className="mb-4 w-full">
      <thead>
        <tr>
          {header.map((header, idx) => {
            return (
              <th key={idx} className="max-w-[275px] break-words px-4 py-3 text-left">
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {pesantrenApiData?.length > 0 &&
          pesantrenApiData?.map((item, idx) => {
            const { pesantren_id, pesantren, yayasan, pendiri, pengasuh, daftarPengasuh, alamat } = item || {};

            return (
              <tr key={pesantren_id} className={`${idx % 2 === 0 ? "bg-neutral" : ""} text-sm`}>
                {active === "informasi" && (
                  <InformasiData
                    id={pesantren_id}
                    pesantren={pesantren}
                    yayasan={yayasan}
                    pendiri={pendiri}
                    pengasuh={pengasuh}
                    daftarPengasuh={daftarPengasuh}
                    alamat={alamat}
                    handleModalToggle={handleModalToggle}
                    className="px-4 py-3"
                  />
                )}
                {active === "keilmuan" && <KeilmuanData className="px-4 py-3" />}
                {active === "pendidikan" && <PendidikanData className="px-4 py-3" />}
                {active === "tambahan" && <TambahanData className="px-4 py-3" />}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
