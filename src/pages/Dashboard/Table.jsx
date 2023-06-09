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
        {daftarPengasuh?.length > 0 &&
          daftarPengasuh?.map((pengasuh, idx) => {
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

const KeilmuanData = ({ pesantren, yayasan, sanad, talim, alamat, className }) => {
  return (
    <>
      <td className={className}>{pesantren}</td>
      <td className={className}>{yayasan}</td>
      <td className={className}>
        {sanad?.length > 0 &&
          sanad?.map((sanad) => {
            const { sanad_id, sanad_name } = sanad;

            return <li key={sanad_id}>{sanad_name}</li>;
          })}
      </td>
      <td className={className}>
        {talim?.length > 0 &&
          talim?.map((talim) => {
            const { talim_id, talim_name } = talim;

            return <li key={talim_id}>{talim_name}</li>;
          })}
      </td>
      <td className={className}>{alamat}</td>
    </>
  );
};

const PendidikanData = ({ pesantren, lembFormal, lembNonFormal, pendFormal, lainLain, className }) => {
  return (
    <>
      <td className={className}>{pesantren}</td>
      <td className={className}>
        {lembFormal?.length > 0 &&
          lembFormal?.map((lemb) => {
            const { lembaga_formal_id, lembaga_formal_name } = lemb;
            return <li key={lembaga_formal_id}>{lembaga_formal_name}</li>;
          })}
      </td>
      <td className={className}>
        {lembNonFormal.length > 0 &&
          lembNonFormal?.map((lemb) => {
            const { lembaga_nonformal_id, lembaga_nonformal_name } = lemb;
            return <li key={lembaga_nonformal_id}>{lembaga_nonformal_name}</li>;
          })}
      </td>
      <td className={className}>
        {pendFormal?.length > 0 &&
          pendFormal?.map((pend) => {
            const { pendidikan_formal_id, pendidikan_formal_name } = pend;
            return <li key={pendidikan_formal_id}>{pendidikan_formal_name}</li>;
          })}
      </td>
      <td className={className}>
        {lainLain?.length > 0 &&
          lainLain?.map((item) => {
            const { lainlain_id, lainlain_name } = item;
            return <li key={lainlain_id}>{lainlain_name}</li>;
          })}
      </td>
    </>
  );
};

const TambahanData = ({ pesantren, usaha, gmaps, facebook, instagram, twitter, website, className }) => {
  return (
    <>
      <td className={className}>{pesantren}</td>
      <td className={className}>
        {usaha?.length &&
          usaha?.map((usaha) => {
            const { usaha_id, usaha_name } = usaha;
            return <li key={usaha_id}>{usaha_name}</li>;
          })}
      </td>
      <td className={className}>{gmaps}</td>
      <td className={className}>
        <li>Facebook: {facebook || "-"}</li>
        <li>Instagram: {instagram || "-"}</li>
        <li>Twitter: {twitter || "-"}</li>
        <li>Website: {website || "-"}</li>
      </td>
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
            const {
              pesantren_id,
              pesantren,
              yayasan,
              pendiri,
              pengasuh,
              daftarPengasuh,
              alamat,
              sanad,
              talim,
              lembFormal,
              lembNonFormal,
              pendFormal,
              lainLain,
              usaha,
              gmaps,
              facebook,
              instagram,
              twitter,
              website,
            } = item || {};

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
                {active === "keilmuan" && (
                  <KeilmuanData
                    pesantren={pesantren}
                    yayasan={yayasan}
                    sanad={sanad}
                    talim={talim}
                    alamat={alamat}
                    className="px-4 py-3"
                  />
                )}
                {active === "pendidikan" && (
                  <PendidikanData
                    pesantren={pesantren}
                    lembFormal={lembFormal}
                    lembNonFormal={lembNonFormal}
                    pendFormal={pendFormal}
                    lainLain={lainLain}
                    className="px-4 py-3"
                  />
                )}
                {active === "tambahan" && (
                  <TambahanData
                    pesantren={pesantren}
                    usaha={usaha}
                    gmaps={gmaps}
                    facebook={facebook}
                    instagram={instagram}
                    twitter={twitter}
                    website={website}
                    className="px-4 py-3"
                  />
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
