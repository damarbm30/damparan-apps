import { useState } from "react";
import { useSelector } from "react-redux";

import { Pesantren, Pagination, Title } from "~/components";
import { Searchbar } from "~/features";
import { pesantrenSalafiyah } from "../../constants/dummy";

const PesantrenSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pesantrenPerPage, setPesantrenPerPage] = useState(4);
  const searchQuery = useSelector((state) => state.searchbar.searchQuery);

  const searchResult = pesantrenSalafiyah.filter((pesantren) => pesantren.nama.toLowerCase().includes(searchQuery));

  const lastIndex = pesantrenPerPage * currentPage;
  const firstIndex = lastIndex - pesantrenPerPage;
  const currentSearchResult = searchResult?.slice(firstIndex, lastIndex);

  const pages = [];

  for (let i = 1; i <= Math.ceil(searchResult?.length / pesantrenPerPage); i++) {
    pages.push(i);
  }

  return (
    <section>
      <Title hideButton>
        <Searchbar />
      </Title>
      <p>Menampilkan hasil pencarian untuk '{searchQuery}'</p>
      <ul className="mb-6 flex flex-col">
        {currentSearchResult?.length > 0 &&
          currentSearchResult?.map((pesantren) => {
            return <Pesantren key={pesantren.id} {...pesantren} />;
          })}
      </ul>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </section>
  );
};
export default PesantrenSearch;
