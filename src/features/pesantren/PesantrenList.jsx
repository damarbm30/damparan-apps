import { useState } from "react";

import { Pagination, PesantrenItem, Title } from "~/components";
import { useGetPesantrenQuery } from "~/app/api/apiSlice";

const PesantrenList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pesantrenPerPage, setPesantrenPerPage] = useState(4);
  const { data: pesantrenApi, isLoading, isSuccess, isError, error } = useGetPesantrenQuery();

  console.log(pesantrenApi);

  const lastIndex = pesantrenPerPage * currentPage;
  const firstIndex = lastIndex - pesantrenPerPage;
  const currentPesantren = pesantrenApi?.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 1; i <= Math.ceil(pesantrenApi?.length / pesantrenPerPage); i++) {
    pages.push(i);
  }

  return (
    <section>
      <Title>Daftar Pesantren</Title>
      {/* content */}
      <ul className="mb-6 flex flex-col">
        {currentPesantren?.length > 0 &&
          currentPesantren?.map((pesantren) => {
            return <PesantrenItem key={pesantren.id} {...pesantren} />;
          })}
      </ul>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </section>
  );
};
export default PesantrenList;
