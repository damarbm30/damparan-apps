import { Link } from "react-router-dom";

import { building, location } from "~/assets";

const PesantrenItem = ({ id, pesantren, yayasan_pengasuh, alamat, fasilitas, foto }) => {
  return (
    <Link
      to={`/pesantren/${id}`}
      className="mx-auto flex w-fit items-center gap-7 border-b py-5 first:pt-0 last:border-b-0 last:pb-0"
    >
      <img src={foto} alt={pesantren} width={91} height={91} className="rounded-lg" />
      <div className="flex flex-col gap-2">
        {/* identitas */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-bold">
            {id} {pesantren}
          </h2>
          <h3 className="text-xs">{yayasan_pengasuh}</h3>
        </div>
        <span className="border-b" />
        <div className="flex flex-col gap-1">
          {/* lokasi */}
          <div className="flex items-center gap-2">
            <img src={location} alt="alamat pesantren" width={8} height={10} />
            <p className="text-xs">{alamat}</p>
          </div>
          {/* fasilitas */}
          <div className="flex items-center gap-2">
            <img src={building} alt="building" width={8} height={10} />
            <p className="text-xs">{fasilitas}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PesantrenItem;
