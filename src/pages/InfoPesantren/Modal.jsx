import { bell } from "~/assets";

export default function Modal({ showModal, setShowModal, isValid }) {
  return (
    <>
      <button className="btn bg-primary" type="button" disabled={!isValid} onClick={() => setShowModal(true)}>
        Submit
      </button>
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden px-4 outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/* content */}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/* body */}
                <div className="relative flex-auto p-6">
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
                    <input type="submit" className="btn bg-primary" disabled={!isValid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50" />
        </>
      )}
    </>
  );
}
