import { SelectInput, TextInput } from "~/components";

const Identitas = ({ register, pengasuhFields, pengasuhAppend, pengasuhRemove }) => {
  return (
    <div className="flex flex-col gap-2">
      <TextInput label="Nama Pesantren" name="pesantren" register={register} />
      <TextInput label="Nama Yayasan" name="yayasan" register={register} />
      <TextInput label="Nama Pendiri Pesantren" name="pendiri" register={register} />
      <TextInput label="Nama Pengasuh Saat Ini" name="pengasuh" register={register} />
      <TextInput
        label="Daftar Pengasuh Pesantren"
        name="daftarPengasuh.pengasuh_name"
        register={register}
        multiple
        fields={pengasuhFields}
        handleAppend={pengasuhAppend}
        handleRemove={pengasuhRemove}
      />
      <TextInput label="Alamat Pesantren" name="alamat.alamat" register={register} />
      <TextInput label="Kecamatan" name="alamat.kecamatan" register={register} fontNormal />
      <SelectInput label="Kabupaten" name="alamat.kabupaten" register={register} fontNormal>
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="bantul">Bantul</option>
        <option value="gunungkidul">Gunungkidul</option>
        <option value="kulonprogo">Kulon Progo</option>
        <option value="sleman">Sleman</option>
        <option value="yogyakarta">Kota Yogyakarta</option>
      </SelectInput>
    </div>
  );
};
export default Identitas;
