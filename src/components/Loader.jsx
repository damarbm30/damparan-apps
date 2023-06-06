const Loader = () => {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="absolute bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 transform ">
        <div className="h-64 w-64 animate-spin  rounded-full border-[16px] border-solid border-primary border-t-transparent"></div>
      </div>
    </section>
  );
};
export default Loader;
