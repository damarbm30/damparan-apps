import { dropdown } from "../../assets";

const Search = ({ handleSubmit, onSubmit, register }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6 flex flex-col gap-2">
      {/* nama pondok */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-bold text-body">
          Nama Pondok
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Tulis nama pondok"
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-muted"
          {...register("nama")}
        />
      </div>
      {/* kota/kabupaten */}
      <div className="mb-5 flex flex-col gap-1">
        <label htmlFor="city" className="font-bold text-body">
          Kota/Kabupaten
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Tulis kota/kabupaten pondok"
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-muted"
          {...register("kota_kabupaten")}
        />
      </div>
      {/* tipe pondok */}
      {/* <div className="mb-5 flex flex-col gap-1">
        <label htmlFor="type" className="font-bold text-body">
          Tipe Pondok
        </label>
        <div className="relative flex items-center font-light">
          <select name="type" id="type" className="w-full appearance-none rounded bg-neutral px-3 py-2 outline-none">
            <option selected>Semua</option>
            <option>Tipe 1</option>
            <option>Tipe 2</option>
            <option>Tipe 3</option>
          </select>
          <img src={dropdown} alt="dropdown" className="absolute right-2" />
        </div>
      </div> */}
      <div className="mx-auto">
        <input type="submit" className="btn bg-primary" value="Cari Pondok Pesantren" />
      </div>
    </form>
  );
};
export default Search;
