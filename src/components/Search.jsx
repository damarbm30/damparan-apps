import { useForm } from "react-hook-form";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = ({ setShowModal }) => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    if (data) {
      // create object from array
      let newData = Object.fromEntries(
        // convert object to array, then convert the string value to lowercase
        // converted object will be a [key, value] pair
        Object.entries(data).map(([key, value]) => [key, typeof value === "string" ? value.toLowerCase() : value])
      );

      const { nama, kota_kabupaten } = newData;
      const params = { name: nama, city: kota_kabupaten };

      navigate({ pathname: "/pencarian", search: `?${createSearchParams(params)}` });

      setShowModal(false);
    }
  };

  return (
    <form className="mb-6 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
          className="rounded bg-neutral px-3 py-2 font-light text-body outline-none placeholder:text-muted"
          {...register("nama")}
        />
      </div>
      {/* kota/kabupaten */}
      <div className="mb-5 flex flex-col gap-1">
        <label htmlFor="city" className="font-bold text-body">
          Kota/Kabupaten
        </label>
        <select
          name="city"
          id="city"
          placeholder="Tulis kota/kabupaten pondok"
          className="rounded bg-neutral px-3 py-2 font-light text-body outline-none placeholder:text-muted"
          {...register("kota_kabupaten")}
        >
          <option value="">Semua</option>
          <option value="bantul">Bantul</option>
          <option value="gunungkidul">Gunungkidul</option>
          <option value="kulonprogo">Kulon Progo</option>
          <option value="sleman">Sleman</option>
          <option value="yogyakarta">Kota Yogyakarta</option>
        </select>
      </div>
      {/* tipe pondok */}
      {/* <div className="mb-5 flex flex-col gap-1">
              <label htmlFor="type" className="font-bold text-body">
                Tipe Pondok
              </label>
              <div className="relative flex items-center font-light">
                <select
                  name="type"
                  id="type"
                  className="w-full appearance-none rounded bg-neutral px-3 py-2 outline-none"
                >
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
