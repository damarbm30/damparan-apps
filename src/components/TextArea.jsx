const TextArea = ({ label, name, register, fontNormal }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={`${fontNormal ? "font-normal" : "font-bold"} text-body`}>
        {label}
      </label>
      <textarea
        type="text"
        className="h-40 rounded bg-neutral px-3 py-2 font-light outline-none placeholder:text-black"
        {...register(name, { required: true })}
      />
    </div>
  );
};
export default TextArea;
