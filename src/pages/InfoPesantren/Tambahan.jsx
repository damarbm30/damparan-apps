import { plus, minus } from "~/assets";

const Tambahan = (props) => {
  const { register, usahaFields, usahaAppend, usahaRemove } = props;

  return (
    <div className="flex flex-col gap-2">
      {/* form unit usaha pesantren */}
      <div className="flex flex-col gap-1">
        <label htmlFor="usaha" className="font-bold text-body">
          Unit Usaha Pesantren (Opsional)
        </label>
        <ul className="flex flex-col gap-2">
          {usahaFields.map((field, index) => {
            return (
              <div key={field.id} className="relative flex items-center rounded bg-neutral">
                <input
                  type="text"
                  id={`usaha${index}`}
                  placeholder=""
                  className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
                  {...register(`usaha[${index}].name`)}
                />
                <button
                  type="button"
                  className={`relative -right-2 flex items-center ${index === 0 && "hidden"}`}
                  onClick={() => usahaRemove(index)}
                >
                  <img src={minus} alt="dropdown" />
                </button>
                <button
                  type="button"
                  className={`relative flex items-center ${index === 0 ? "right-2" : "right-8"}`}
                  onClick={() => usahaAppend()}
                >
                  <img src={plus} alt="dropdown" />
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* link google maps */}
      <div className="flex flex-col gap-1">
        <label htmlFor="gmaps" className="font-bold text-body">
          Link Google Maps
        </label>
        <input
          type="text"
          id="gmaps"
          placeholder=""
          className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("gmaps")}
        />
      </div>
      {/* media pesantren */}
      <p className="font-bold text-body">Media Pesantren (Opsional)</p>
      <div className="flex flex-col gap-1">
        <label htmlFor="instagram" className="text-body">
          Instagram
        </label>
        <input
          type="text"
          id="instagram"
          placeholder=""
          className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("media.instagram")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="facebook" className="text-body">
          Facebook
        </label>
        <input
          type="text"
          id="facebook"
          placeholder=""
          className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("media.facebook")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="twitter" className="text-body">
          Twitter
        </label>
        <input
          type="text"
          id="twitter"
          placeholder=""
          className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("media.twitter")}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="web" className="text-body">
          Website
        </label>
        <input
          type="text"
          id="web"
          placeholder=""
          className="w-full rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
          {...register("media.web")}
        />
      </div>
    </div>
  );
};
export default Tambahan;
