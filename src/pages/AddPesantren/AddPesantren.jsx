import { Link } from "react-router-dom";
import { lazy, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, array, string, mixed } from "yup";

const Identitas = lazy(() => import("./Identitas"));
const Keilmuan = lazy(() => import("./Keilmuan"));
const Pendidikan = lazy(() => import("./Pendidikan"));
const Tambahan = lazy(() => import("./Tambahan"));
const Foto = lazy(() => import("./Foto"));
const Confirmation = lazy(() => import("./Confirmation"));
const Info = lazy(() => import("./Info"));
import { Title } from "~/components";
import { useAddPesantrenMutation } from "~/app/api/apiSlice";
import { checkmark } from "~/assets";

const identitasSchema = object().shape({
  pesantren: string().required(),
  yayasan: string().required(),
  pendiri: string().required(),
  pengasuh: string().required(),
  daftarPengasuh: array().of(string().required()).required(),
  alamat: object().shape({
    alamat: string().required(),
    kecamatan: string().required(),
    kabupaten: string().required(),
  }),
});
const keilmuanSchema = object().shape({
  sanad: string().required(),
  talim: array().of(string().required()).required(),
  pendidikan: array().of(string().required()).required(),
});
const pendidikanSchema = object().shape({
  lembFormal: array().of(string().required()).required(),
  lembNonFormal: array().of(string().required()).required(),
  pendFormal: array().of(string().required()).required(),
  lainLain: array().of(string().required()).required(),
  // }),
});
const tambahanSchema = object().shape({
  gmaps: string().required(),
});
const infoSchema = object().shape({
  deskripsi: string().required(),
  fasilitas: array().of(string().required()),
});
const fotoSchema = object().shape({
  // foto: mixed().test("required", (value) => {
  //   return value && value.length >= 3;
  // }),
});

const AddPesantren = () => {
  const validateForm = () => {
    if (step === 1) return identitasSchema;
    if (step === 2) return keilmuanSchema;
    if (step === 3) return pendidikanSchema;
    if (step === 4) return tambahanSchema;
    if (step === 5) return infoSchema;
    if (step === 6) return fotoSchema;
  };

  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [addPesantren] = useAddPesantrenMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
    watch,
  } = useForm({
    defaultValues: {
      daftarPengasuh: ["-"],
      talim: [{}],
      pendidikan: [{}],
      lembFormal: [{}],
      lembNonFormal: [{}],
      pendFormal: [{}],
      lainLain: [{}],
      usaha: ["-"],
      fasilitas: ["-"],
    },
    resolver: yupResolver(validateForm()),
  });

  // daftar pengasuh
  const {
    fields: pengasuhFields,
    append: pengasuhAppend,
    remove: pengasuhRemove,
  } = useFieldArray({ control, name: "daftarPengasuh" });
  // ta'lim
  const { fields: talimFields, append: talimAppend, remove: talimRemove } = useFieldArray({ control, name: "talim" });
  // lembaga pendidikan formal
  const {
    fields: pendidikanFields,
    append: pendidikanAppend,
    remove: pendidikanRemove,
  } = useFieldArray({ control, name: "pendidikan" });
  // lembaga pendidikan formal
  const {
    fields: lembFormalFields,
    append: lembFormalAppend,
    remove: lembFormalRemove,
  } = useFieldArray({ control, name: "lembFormal" });
  // lembaga pendidikan nonformal
  const {
    fields: lembNonFormalFields,
    append: lembNonFormalAppend,
    remove: lembNonFormalRemove,
  } = useFieldArray({ control, name: "lembNonFormal" });
  // pendidikan formal
  const {
    fields: pendFormalFields,
    append: pendFormalAppend,
    remove: pendFormalRemove,
  } = useFieldArray({ control, name: "pendFormal" });
  // lain-lain
  const {
    fields: lainLainFields,
    append: lainLainAppend,
    remove: lainLainRemove,
  } = useFieldArray({ control, name: "lainLain" });
  // unit usaha pesantren
  const { fields: usahaFields, append: usahaAppend, remove: usahaRemove } = useFieldArray({ control, name: "usaha" });
  // fasilitas
  const {
    fields: fasilitasFields,
    append: fasilitasAppend,
    remove: fasilitasRemove,
  } = useFieldArray({ control, name: "fasilitas" });

  const displayForm = () => {
    return (
      <>
        {step === 1 && (
          <Identitas
            register={register}
            pengasuhFields={pengasuhFields}
            pengasuhAppend={pengasuhAppend}
            pengasuhRemove={pengasuhRemove}
          />
        )}
        {step === 2 && (
          <Keilmuan
            register={register}
            talimFields={talimFields}
            talimAppend={talimAppend}
            talimRemove={talimRemove}
            pendidikanFields={pendidikanFields}
            pendidikanAppend={pendidikanAppend}
            pendidikanRemove={pendidikanRemove}
          />
        )}
        {step === 3 && (
          <Pendidikan
            register={register}
            lembFormalFields={lembFormalFields}
            lembFormalAppend={lembFormalAppend}
            lembFormalRemove={lembFormalRemove}
            lembNonFormalFields={lembNonFormalFields}
            lembNonFormalAppend={lembNonFormalAppend}
            lembNonFormalRemove={lembNonFormalRemove}
            pendFormalFields={pendFormalFields}
            pendFormalAppend={pendFormalAppend}
            pendFormalRemove={pendFormalRemove}
            lainLainFields={lainLainFields}
            lainLainAppend={lainLainAppend}
            lainLainRemove={lainLainRemove}
          />
        )}
        {step === 4 && (
          <Tambahan register={register} usahaFields={usahaFields} usahaAppend={usahaAppend} usahaRemove={usahaRemove} />
        )}
        {step === 5 && (
          <Info
            register={register}
            fasilitasFields={fasilitasFields}
            fasilitasAppend={fasilitasAppend}
            fasilitasRemove={fasilitasRemove}
          />
        )}
        {step === 6 && <Foto register={register} watch={watch} />}
      </>
    );
  };

  const displayTitle = () => {
    return (
      <>
        {step === 1 && "Informasi Pesantren"}
        {step === 2 && "Keilmuan Pesantren"}
        {step === 3 && "Lembaga Pendidikan Pesantren"}
        {step === 4 && "Informasi Tambahan"}
        {step === 5 && "Info Pesantren"}
        {step === 6 && "Foto Pesantren"}
      </>
    );
  };

  const onSubmit = (data) => {
    const formattedData = {
      pesantren: data.pesantren,
      yayasan: data.yayasan,
      pendiri: data.pendiri,
      pengasuh: data.pengasuh,
      deskripsi: data.deskripsi,
      daftarPengasuh: data.daftarPengasuh,
      alamat: data.alamat,
      foto_filename: data.foto_filename,
      keilmuan: {
        sanad: [data.sanad],
        talim: data.talim,
        pendidikan: data.pendidikan,
      },
      lembaga_pendidikan: {
        lembFormal: data.lembFormal,
        lembNonFormal: data.lembNonFormal,
        pendFormal: data.pendFormal,
        lainLain: data.lainLain,
      },
      informasi_tambahan: {
        usaha: data.usaha,
        gmaps: data.gmaps,
        fasilitas: data.fasilitas,
      },
      media: data.media,
    };

    addPesantren(formattedData);

    setShowModal(false);
    setIsSubmit(true);
  };

  const changePage = (direction) => {
    if (direction === "next") setStep((prev) => prev + 1);
    else setStep((prev) => prev - 1);
  };

  return (
    <section>
      {!isSubmit ? (
        <>
          <Title>{displayTitle()}</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">{displayForm()}</div>
            <div className="flex justify-center gap-3">
              {step > 1 && (
                <button type="button" className="btn bg-muted" onClick={() => changePage()}>
                  Kembali
                </button>
              )}
              {step === 6 ? (
                // <Foto register={register} watch={watch} />
                <Confirmation enabled={isValid} showModal={showModal} setShowModal={setShowModal} />
              ) : (
                <button type="button" className="btn bg-primary" onClick={() => changePage("next")} disabled={!isValid}>
                  Berikutnya
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <>
          <Title>Pendaftaran Pesantren</Title>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
            <img src={checkmark} alt="checkmark" width={74} height={74} />
            <p className="text-lg font-bold">Pendaftaran Berhasil</p>
            <Link to="/" className="btn bg-primary">
              Home
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default AddPesantren;
