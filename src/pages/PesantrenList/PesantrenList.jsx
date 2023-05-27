import { useState } from "react";

import { Pagination, Pesantren, Title } from "~/components";
import { pesantrenSalafiyah } from "../../constants/dummy";

const PesantrenList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pesantrenPerPage, setPesantrenPerPage] = useState(4);

  const lastIndex = pesantrenPerPage * currentPage;
  const firstIndex = lastIndex - pesantrenPerPage;
  const currentPesantren = pesantrenSalafiyah?.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 1; i <= Math.ceil(pesantrenSalafiyah?.length / pesantrenPerPage); i++) {
    pages.push(i);
  }

  return (
    <section>
      <Title>
        Semua Pondok Salafiyah
        <br /> di Sleman
      </Title>
      {/* content */}
      <ul className="mb-6 flex flex-col">
        {currentPesantren?.length > 0 &&
          currentPesantren?.map((pesantren) => {
            return <Pesantren key={pesantren.id} {...pesantren} />;
          })}
      </ul>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </section>
  );
};
export default PesantrenList;
