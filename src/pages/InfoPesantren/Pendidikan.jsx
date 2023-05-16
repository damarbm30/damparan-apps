import { plus, minus } from "~/assets";

const Pendidikan = (props) => {
  const {
    register,
    lembFormalFields,
    lembFormalAppend,
    lembFormalRemove,
    lembNonFormalFields,
    lembNonFormalAppend,
    lembNonFormalRemove,
    pendFormalFields,
    pendFormalAppend,
    pendFormalRemove,
    lainLainFields,
    lainLainAppend,
    lainLainRemove,
  } = props;

  return (
    <div className="flex flex-col gap-2">
      {/* form lembaga pendidikan formal */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lembFormal" className="font-bold text-body">
          Lembaga Pendidikan Formal
        </label>
        <ul className="flex flex-col gap-2">
          {lembFormalFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`lembFormal${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`lembFormal[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => lembFormalRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => lembFormalAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* form lembaga pendidikan nonformal */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lembNonFormal" className="font-bold text-body">
          Lembaga Pendidikan Non-Formal
        </label>
        <ul className="flex flex-col gap-2">
          {lembNonFormalFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`lembNonFormal${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`lembNonFormal[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => lembNonFormalRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => lembNonFormalAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* pendidikan nonformal */}
      <div className="flex flex-col gap-1">
        <label htmlFor="pendFormal" className="font-bold text-body">
          Pendidikan Formal
        </label>
        <ul className="flex flex-col gap-2">
          {pendFormalFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`pendFormal${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`pendFormal[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => pendFormalRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => pendFormalAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* lain-lain */}
      <div className="flex flex-col gap-1">
        <label htmlFor="lainLain" className="font-bold text-body">
          Lain-Lain
        </label>
        <ul className="flex flex-col gap-2">
          {lainLainFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`lainLain${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`lainLain[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => lainLainRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => lainLainAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Pendidikan;
