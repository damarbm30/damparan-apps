import { SelectInput, TextInput } from "~/components";

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
      <TextInput label="Sanad Keilmuan (Nama Kyai/Bunyai)" name="sanad" register={register} />
      <SelectInput
        label="Spesifikasi Ta'lim"
        name="talim"
        register={register}
        multiple
        fields={talimFields}
        handleAppend={talimAppend}
        handleRemove={talimRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="quran">Qur'an</option>
        <option value="kitab">Kitab</option>
        <option value="thoriqoh">Thoriqoh</option>
      </SelectInput>
      <SelectInput
        label="Lembaga Pendidikan Formal"
        name="pendidikan"
        register={register}
        multiple
        fields={pendidikanFields}
        handleAppend={pendidikanAppend}
        handleRemove={pendidikanRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="muadalah">Satuan Pendidikan Muadalah (SPM)</option>
        <option value="diniyah">Pendidikan Diniyah Formal (PDF)</option>
        <option value="mahadali">Mahad Ali</option>
      </SelectInput>
    </div>
  );
};
export default Keilmuan;
