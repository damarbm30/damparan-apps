import { bell } from "~/assets";
import { Modal } from "~/components";

const Confirmation = ({ enabled, setIsSubmit, showModal, setShowModal }) => {
  return (
    <>
      <button className="btn bg-primary" type="button" disabled={!enabled} onClick={() => setShowModal(true)}>
        Submit
      </button>
      <Modal showModal={showModal}>
        <img
          src={bell}
          alt="bell"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          width={45}
          height={50}
        />
        <p className="my-4 text-lg leading-relaxed text-slate-500">Data yang saya isikan sudah benar!</p>
        <div className="flex justify-center gap-3">
          <button className="btn bg-muted" type="button" onClick={() => setShowModal(false)}>
            Kembali
          </button>
          <input
            type="submit"
            className="btn cursor-pointer bg-primary"
            disabled={!enabled}
            value="Ya"
            onClick={() => setIsSubmit(true)}
          />
        </div>
      </Modal>
      {/* {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden px-4 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white p-6 shadow-lg outline-none focus:outline-none">
                <img
                  src={bell}
                  alt="bell"
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  width={45}
                  height={50}
                />
                <p className="my-4 text-lg leading-relaxed text-slate-500">Data yang saya isikan sudah benar!</p>
                <div className="flex justify-center gap-3">
                  <button className="btn bg-muted" type="button" onClick={() => setShowModal(false)}>
                    Kembali
                  </button>
                  <input
                    type="submit"
                    className="btn cursor-pointer bg-primary"
                    disabled={!enabled}
                    value="Ya"
                    onClick={() => setIsSubmit(true)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50" />
        </>
      )} */}
    </>
  );
};

export default Confirmation;
