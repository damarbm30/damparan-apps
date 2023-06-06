import { useEffect, useState } from "react";

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

const InformasiData = ({ className }) => {
  return (
    <>
      <td className={className}>PP Ali Maksum</td>
      <td className={className}>Yayasan Ali Maksum</td>
      <td className={className}>K.H. Ali Maksum</td>
      <td className={className}>K.H. Jirjis Ali</td>
      <td className={className}>Ny. Hj. Dra. Ida Rufaida Ali</td>
      <td className={className}>Jl. KH. Ali Maksum Gg. Mawar No.RT.06, Krapyak Kulon, Panggungharjo, </td>
      <td className={className}>
        <button>Edit</button>
        <button>Delete</button>
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

const Table = () => {
  const [active, setActive] = useState("informasi");
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
  }, []);

  return (
    <table className="w-screen">
      <thead>
        <tr>
          {header.map((header, idx) => {
            return (
              <th key={idx} className="max-w-[150px] break-words px-4 py-3 text-left">
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {[0, 1, 2].map((item, idx) => {
          return (
            <tr key={idx} className={`${idx % 2 === 0 ? "bg-neutral" : ""} text-sm`}>
              {active === "informasi" && <InformasiData className="max-w-[350px] px-4 py-3" />}
              {active === "keilmuan" && <KeilmuanData className="max-w-[350px] px-4 py-3" />}
              {active === "pendidikan" && <PendidikanData className="max-w-[350px] px-4 py-3" />}
              {active === "tambahan" && <TambahanData className="max-w-[350px] px-4 py-3" />}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
