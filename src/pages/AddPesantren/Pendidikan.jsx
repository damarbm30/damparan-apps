import { SelectInput } from "~/components";

const Pendidikan = ({
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
}) => {
  return (
    <div className="flex flex-col gap-2">
      <SelectInput
        label="Lembaga Pendidikan Formal"
        name="lembFormal"
        register={register}
        multiple
        fields={lembFormalFields}
        handleAppend={lembFormalAppend}
        handleRemove={lembFormalRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="muadalah">Satuan Pendidikan Muadalah (SPM)</option>
        <option value="diniyah">Pendidikan Diniyah Formal (PDF)</option>
        <option value="mahadali">Mahad Ali</option>
      </SelectInput>
      <SelectInput
        label="Lembaga Pendidikan Non-Formal"
        name="lembNonFormal"
        register={register}
        multiple
        fields={lembNonFormalFields}
        handleAppend={lembNonFormalAppend}
        handleRemove={lembNonFormalRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="fkpps">Pendidikan Kesetaraan Pondok Pesantren Salafiyah (FKPPS)</option>
      </SelectInput>
      <SelectInput
        label="Pendidikan Formal"
        name="pendFormal"
        register={register}
        multiple
        fields={pendFormalFields}
        handleAppend={pendFormalAppend}
        handleRemove={pendFormalRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="sd">SD</option>
        <option value="smp">SMP</option>
        <option value="sma">SMA</option>
        <option value="man">MAN</option>
        <option value="mi">MI</option>
        <option value="mts">MTs</option>
        <option value="man">MAN</option>
        <option value="universitas">Universitas/Perguruan Tinggi</option>
      </SelectInput>
      <SelectInput
        label="Lain-Lain"
        name="lainLain"
        register={register}
        multiple
        fields={lainLainFields}
        handleAppend={lainLainAppend}
        handleRemove={lainLainRemove}
      >
        <option value="" hidden>
          Silakan pilih
        </option>
        <option value="tk">Taman Kanak-Kanak (TK)</option>
      </SelectInput>
    </div>
  );
};
export default Pendidikan;
