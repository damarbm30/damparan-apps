import { plus, minus } from "~/assets";

const Keilmuan = ({
  register,
  talimFields,
  talimAppend,
  talimRemove,
  pendidikanFields,
  pendidikanAppend,
  pendidikanRemove,
}) => {
  const talimParent = document.getElementById("talimParent");
  // console.log(talimParent?.childNodes);
  // console.log(talimParent?.childNodes.length);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="sanad" className="font-bold text-body">
          Sanad Keilmuan (Nama Kyai/Bunyai)
        </label>
        <input
          type="text"
          id="sanad"
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("sanad")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="talim" className="font-bold text-body">
          Spesifikasi Ta'lim
        </label>
        <ul className="flex flex-col gap-2">
          {talimFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`talim${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`talim[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => talimRemove(index)}
                >
                  <img src={minus} alt="remove" width={16} height={16} />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => talimAppend()}
                >
                  <img src={plus} alt="add" width={16} height={16} />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="pendidikan" className="font-bold text-body">
          Lembaga Pendidikan Formal
        </label>
        <ul className="flex flex-col gap-2">
          {pendidikanFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`pendidikan${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`pendidikan[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => pendidikanRemove(index)}
                >
                  <img src={minus} alt="remove" width={16} height={16} />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => pendidikanAppend()}
                >
                  <img src={plus} alt="add" width={16} height={16} />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Keilmuan;
