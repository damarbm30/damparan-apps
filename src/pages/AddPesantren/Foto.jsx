import { imgPlaceholder } from "~/assets";
import { TextInput } from "~/components";
import useFilePreview from "~/hooks/useFilePreview";

const Foto = ({ register, watch, fotoFields, fotoAppend, fotoRemove }) => {
  // const file = watch("foto");
  // const [filePreview] = useFilePreview(file);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-body">Upload Foto Pesantren</p>
      {/* <p className="text-xs text-body">Upload minimal 3 foto</p> */}
      <TextInput
        label=""
        name="foto.file_name"
        register={register}
        multiple
        fields={fotoFields}
        handleAppend={fotoAppend}
        handleRemove={fotoRemove}
      />
      {/* <label
        htmlFor="foto"
        className="flex cursor-pointer flex-col items-center justify-center rounded bg-neutral py-8"
      >
        <div className="flex flex-col items-center gap-2">
          <img src={imgPlaceholder} alt="image-placeholder" width={45} height={45} />
          <p className="text-xs font-bold text-muted">Upload Foto</p>
        </div>
      </label>
      <input type="file" id="foto" multiple className="hidden" {...register("foto", { required: true })} />
      <div className="mx-auto">
        {filePreview
          ? filePreview.map((file, idx) => {
              return <img key={idx} src={file} alt="preview" className="rounded" width={200} height={200} />;
            })
          : null}
      </div> */}
    </div>
  );
};
export default Foto;
