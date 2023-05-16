import { Carousel, Title } from "~/components";
import { listPesantren, listPromo } from "~/constants/dummy";
import PesantrenForm from "./PesantrenForm";

const Pesantren = () => {
  return (
    <section>
      <Title>Cari Pesantren</Title>
      <PesantrenForm />
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Populer</p>
        <p className="underline">Semua</p>
      </div>
      <Carousel data={listPesantren} />
      <div className="mb-4 flex justify-between font-bold text-secondary">
        <p>Salafiyah</p>
        <p className="underline">Semua</p>
      </div>
      <Carousel data={listPromo} />
    </section>
  );
};
export default Pesantren;
