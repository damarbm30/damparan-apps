import { bell } from "~/assets";
import { Modal } from "~/components";

const Confirmation = ({ enabled, showModal, setShowModal }) => {
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
          <input type="submit" className="btn cursor-pointer bg-primary" disabled={!enabled} value="Ya" />
        </div>
      </Modal>
    </>
  );
};

export default Confirmation;
