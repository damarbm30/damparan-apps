import { arrowRight, camera } from "~/assets";
import { Title } from "~/components";

const Profil = () => {
  return (
    <section>
      <Title>Profil</Title>
      <div className="relative left-1/2 inline-block -translate-x-1/2">
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=male"
          alt="avatar"
          className="mx-auto rounded-full border-2 border-primary"
          width={126}
          height={126}
        />
        <img src={camera} alt="camera" className="absolute bottom-5 right-2" />
      </div>
      <p className="mb-3 text-center font-bold text-primary">Nama Pengguna</p>
      <div className="mb-6 flex flex-col gap-2">
        <div>
          <p className="mb-1 font-bold text-body">Tipe Akun</p>
          <div className="rounded bg-neutral px-3 py-2 font-light">User Account</div>
        </div>
        <div>
          <p className="mb-1 font-bold text-body">Identitas KartaNU</p>
          <div className="flex justify-between rounded bg-neutral px-3 py-2 font-light">
            <p>Nama Pengguna</p>
            <div className="flex items-center gap-3">
              <p>Lihat Detail</p>
              <img src={arrowRight} alt="arrow-right" width={8} height={15} className="object-contain pt-[2px]" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1 font-bold text-body">Nomor HP</p>
          <div className="flex justify-between rounded bg-neutral px-3 py-2 font-light">
            <p>17081945</p>
            <div className="flex items-center gap-3">
              <p>Ubah</p>
              <img src={arrowRight} alt="arrow-right" width={8} height={15} className="object-contain pt-[2px]" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1 font-bold text-body">Alamat Email</p>
          <div className="flex justify-between rounded bg-neutral px-3 py-2 font-light">
            <p>dummy@dummy.com</p>
            <div className="flex items-center gap-3">
              <p>Ubah</p>
              <img src={arrowRight} alt="arrow-right" width={8} height={15} className="object-contain pt-[2px]" />
            </div>
          </div>
        </div>
      </div>
      <button className="btn relative left-1/2 -translate-x-1/2 bg-primary">Logout</button>
    </section>
  );
};
export default Profil;
