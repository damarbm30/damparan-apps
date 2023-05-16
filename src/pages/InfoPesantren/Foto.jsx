import useFilePreview from "../../hooks/useFilePreview";

const Foto = (props) => {
  const { register, watch } = props;
  const file = watch("foto");
  const [filePreview] = useFilePreview(file);

  return (
    <div>
      <p className="font-bold text-body">Upload Foto Pesantren</p>
      <p className="text-xs text-body">Upload minimal 3 foto</p>
      <input type="file" multiple {...register("foto", { required: true })} />
      {filePreview
        ? filePreview.map((file, idx) => {
            return <img key={idx} src={file} alt="preview" />;
          })
        : null}
    </div>
  );
};
export default Foto;
