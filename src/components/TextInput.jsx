import { minus, plus } from "~/assets";

const TextInput = ({ label, name, register, fields, handleAppend, handleRemove, multiple, fontNormal }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={`${fontNormal ? "font-normal" : "font-bold"} text-body`}>
        {label}
      </label>
      {!multiple ? (
        <input
          type="text"
          id={name}
          placeholder=""
          className="rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register(name, { required: true })}
        />
      ) : (
        <ul className="flex flex-col gap-2">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`${name}${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`${name}[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => handleRemove(index)}
                >
                  <img src={minus} alt="remove" width={16} height={16} />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => handleAppend()}
                >
                  <img src={plus} alt="add" width={16} height={16} />
                </button>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default TextInput;
