import { plus, minus } from "~/assets";

const Identitas = (props) => {
  const { register, pengasuhFields, pengasuhAppend, pengasuhRemove } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="pesantren" className="font-bold text-body">
          Nama Pesantren
        </label>
        <input
          type="text"
          id="pesantren"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("pesantren", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="yayasan" className="font-bold text-body">
          Nama Yayasan
        </label>
        <input
          type="text"
          id="yayasan"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("yayasan")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pendiri" className="font-bold text-body">
          Nama Pendiri Pesantren
        </label>
        <input
          type="text"
          id="pendiri"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("pendiri")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pengasuh" className="font-bold text-body">
          Nama Pengasuh Saat Ini
        </label>
        <input
          type="text"
          id="pengasuh"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("pengasuh")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="daftarPengasuh" className="font-bold text-body">
          Daftar Pengasuh Pesantren
        </label>
        <ul className="flex flex-col gap-2">
          {pengasuhFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`daftarPengasuh${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`daftarPengasuh[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => pengasuhRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => pengasuhAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="alamat" className="font-bold text-body">
          Alamat Pesantren
        </label>
        <input
          type="text"
          id="alamat"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("alamat.alamat")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="kecamatan" className="text-body">
          Kecamatan
        </label>
        <input
          type="text"
          id="kecamatan"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("alamat.kecamatan")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="kabupaten" className="text-body">
          Kabupaten
        </label>
        <input
          type="text"
          id="kabupaten"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("alamat.kabupaten")}
        />
      </div>
    </div>
  );
};
export default Identitas;
