import { useState } from "react";

import { Modal, Search } from "~/components";

const Searchbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rounded-2xl bg-primary px-2 py-1 text-white outline-none">
      <div
        className="w-full bg-[url('/src/assets/search.webp')] bg-contain bg-right bg-no-repeat"
        onClick={() => setShowModal(true)}
      >
        Search
      </div>
      <Modal showModal={showModal}>
        <button
          className="absolute right-0 top-0 h-6 w-6 -translate-y-1/2 translate-x-1/2 rounded-full border-black bg-white text-center font-bold text-body"
          onClick={() => setShowModal(false)}
        >
          &#10006;
        </button>
        <Search setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};
export default Searchbar;
