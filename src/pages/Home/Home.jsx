import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Carousel, Title } from "~/components";
import { listPesantren, listPromo, pesantrenSalafiyah } from "~/constants/dummy";
import Search from "./Search";

const Home = () => {
  const { handleSubmit, register } = useForm();
  const [filteredPesantren, setFilteredPesantren] = useState(pesantrenSalafiyah);

  const handleSearch = useCallback((namaKey, kota_kabupatenKey) => {
    const filterResult = pesantrenSalafiyah.filter(
      (pesantren) =>
        pesantren?.nama?.toLowerCase().includes(namaKey?.toLowerCase()) &&
        pesantren?.kabupaten?.toLowerCase().includes(kota_kabupatenKey?.toLowerCase())
    );

    setFilteredPesantren(filterResult);
  }, []);

  const onSubmit = (data) => {
    const { nama, kota_kabupaten } = data;
    handleSearch(nama, kota_kabupaten);
  };

  return (
    <section>
      <Title hideButton>Beranda</Title>
      <Search handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} />
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Populer</p>
        <Link to="/" className="underline">
          Semua
        </Link>
      </div>
      <Carousel data={listPesantren} />
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Salafiyah</p>
        <Link to="/pesantren" className="underline">
          Semua
        </Link>
      </div>
      <Carousel data={listPromo} />
    </section>
  );
};
export default Home;
