import { TextInput } from "~/components";
import { plus, minus } from "~/assets";

const Tambahan = ({ register, usahaFields, usahaAppend, usahaRemove }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* form unit usaha pesantren */}
      <TextInput
        label="Unit Usaha Pesantren (Opsional)"
        name="usaha"
        register={register}
        multiple
        fields={usahaFields}
        handleAppend={usahaAppend}
        handleRemove={usahaRemove}
      />
      <TextInput label="Link Google Maps" name="gmaps" register={register} />
      <p className="font-bold text-body">Media Pesantren (Opsional)</p>
      <TextInput label="Instagram" name="media.instagram" register={register} fontNormal />
      <TextInput label="Facebook" name="media.facebook" register={register} fontNormal />
      <TextInput label="Twitter" name="media.twitter" register={register} fontNormal />
      <TextInput label="Website" name="media.website" register={register} fontNormal />
    </div>
  );
};
export default Tambahan;
