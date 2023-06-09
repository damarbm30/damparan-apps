import { Link } from "react-router-dom";

import { building, location } from "~/assets";

const PesantrenItem = ({ pesantren_id, pesantren, yayasan, kecamatan, kabupaten, fasilitas, foto }) => {
  let formattedURL;

  if (foto) {
    const regex = /\/d\/(.+?)\/view/;
    const match = regex.exec(foto);
    formattedURL = match[1];
  }

  return (
    <div className="mx-auto min-w-[350px] max-w-[350px]">
      <Link
        to={`/pesantren/${pesantren_id}`}
        className="flex w-full items-center gap-7 border-b py-5 first:pt-0 last:border-b-0 last:pb-0"
      >
        <img src={formattedURL || null} alt={pesantren} width={91} height={91} className="rounded-lg object-contain" />
        <div className="flex w-full flex-col gap-2">
          {/* identitas */}
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold">{pesantren}</h2>
            <h3 className="text-xs">{yayasan}</h3>
          </div>
          <span className="border-b" />
          <div className="flex flex-col gap-1">
            {/* lokasi */}
            <div className="flex items-center gap-2">
              <img src={location} alt="alamat pesantren" width={8} height={10} />
              <p className="text-xs">
                {kecamatan}, {kabupaten.charAt(0).toUpperCase() + kabupaten.slice(1)}
              </p>
            </div>
            {/* fasilitas */}
            <div className="flex items-center gap-2">
              <img src={building} alt="building" width={8} height={10} />
              {fasilitas.map((f, idx) => {
                return (
                  <p key={idx} className="text-xs">
                    {f.fasilitas_name}
                    {idx !== fasilitas.length - 1 ? "," : ""}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PesantrenItem;
