import { TextArea, TextInput } from "~/components";

const Info = ({ register, fasilitasFields, fasilitasAppend, fasilitasRemove }) => {
  return (
    <div className="flex flex-col gap-2">
      <TextArea label="Deskripsi" name="deskripsi" register={register} />
      <TextInput
        label="Fasilitas"
        name="fasilitas"
        register={register}
        multiple
        fields={fasilitasFields}
        handleAppend={fasilitasAppend}
        handleRemove={fasilitasRemove}
      />
    </div>
  );
};

export default Info;
