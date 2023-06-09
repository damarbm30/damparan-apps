import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import PesantrenItem from "../PesantrenList/PesantrenItem";
import { Pagination, Searchbar } from "~/components";
import { useGetPesantrenQuery } from "~/app/api/apiSlice";

const PesantrenSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pesantrenPerPage, setPesantrenPerPage] = useState(4);
  const { data: pesantrenApi } = useGetPesantrenQuery();

  const searchResult = pesantrenApi?.filter((pesantren) => {
    return (
      pesantren.pesantren.toLowerCase().includes(searchParams.get("name")) &&
      pesantren.kabupaten.toLowerCase().includes(searchParams.get("city"))
    );
  });

  const lastIndex = pesantrenPerPage * currentPage;
  const firstIndex = lastIndex - pesantrenPerPage;
  const currentSearchResult = searchResult?.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 1; i <= Math.ceil(searchResult?.length / pesantrenPerPage); i++) {
    pages.push(i);
  }

  return (
    <section>
      <div className="mb-4 pt-3">
        <Searchbar />
      </div>
      <p className="mb-8 text-body">
        Menampilkan hasil pencarian {searchParams?.get("name") && searchParams?.get("name")}
        {searchParams.get("city") && `untuk daerah ${searchParams.get("city")}`}
      </p>
      <ul className="mb-6 flex flex-col">
        {currentSearchResult?.length > 0 ? (
          currentSearchResult?.map((pesantren) => {
            return <PesantrenItem key={pesantren.id} {...pesantren} />;
          })
        ) : (
          <p className="font-bold text-body">
            Maaf, tidak ditemukan pesantren
            {searchParams?.get("name") && ` dengan nama ${searchParams?.get("name")}`}
            {searchParams?.get("city") && ` untuk daerah ${searchParams.get("city")}`}
          </p>
        )}
      </ul>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </section>
  );
};
export default PesantrenSearch;
