import { useState } from "react";

import { Modal, Search } from "~/components";
import { xSymbol } from "~/assets";

const Searchbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rounded-xl bg-primary px-2 py-2 text-white outline-none">
      <div
        className="w-full bg-[url('/src/assets/search.webp')] bg-contain bg-right bg-no-repeat"
        onClick={() => setShowModal(true)}
      >
        Search
      </div>
      <Modal showModal={showModal}>
        <button
          className="absolute right-0 top-0 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-black bg-white text-center font-bold text-body"
          onClick={() => setShowModal(false)}
        >
          <img src={xSymbol} alt="x symbol" width={10} height={10} />
        </button>
        <Search setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};
export default Searchbar;
