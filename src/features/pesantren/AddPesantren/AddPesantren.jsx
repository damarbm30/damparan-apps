import { Link } from "react-router-dom";
import { lazy, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title } from "~/components";
const Identitas = lazy(() => import("./Identitas"));
const Keilmuan = lazy(() => import("./Keilmuan"));
const Pendidikan = lazy(() => import("./Pendidikan"));
const Tambahan = lazy(() => import("./Tambahan"));
const Foto = lazy(() => import("./Foto"));
const Confirmation = lazy(() => import("./Confirmation"));
import { checkmark } from "~/assets";
import { useAddPesantrenMutation } from "~/app/api/apiSlice";

const AddPesantren = () => {
  const identitasSchema = yup.object().shape({
    pesantren: yup.string().required(),
    yayasan: yup.string().required(),
    pendiri: yup.string().required(),
    pengasuh: yup.string().required(),
    daftarPengasuh: yup
      .array()
      .of(yup.object().shape({ name: yup.string().required() }))
      .required(),
    alamat: yup.object().shape({
      alamat: yup.string().required(),
      kecamatan: yup.string().required(),
      kabupaten: yup.string().required(),
    }),
  });
  const keilmuanSchema = yup.object().shape({
    sanad: yup.string().required(),
    talim: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
        })
      )
      .required(),
    pendidikan: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
        })
      )
      .required(),
  });
  const pendidikanSchema = yup.object().shape({
    lembFormal: yup
      .array()
      .of(yup.object().shape({ name: yup.string().required() }))
      .required(),
    lembNonFormal: yup
      .array()
      .of(yup.object().shape({ name: yup.string().required() }))
      .required(),
    pendFormal: yup
      .array()
      .of(yup.object().shape({ name: yup.string().required() }))
      .required(),
    lainLain: yup
      .array()
      .of(yup.object().shape({ name: yup.string().required() }))
      .required(),
  });
  const tambahanSchema = yup.object().shape({
    gmaps: yup.string().required(),
  });
  const fotoSchema = yup.object().shape({
    foto: yup.mixed().test("required", (value) => {
      return value && value.length >= 3;
    }),
  });

  const validateForm = () => {
    if (step === 1) return identitasSchema;
    if (step === 2) return keilmuanSchema;
    if (step === 3) return pendidikanSchema;
    if (step === 4) return tambahanSchema;
    if (step === 5) return fotoSchema;
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
      daftarPengasuh: [{ name: "" }],
      talim: [{ name: "" }],
      pendidikan: [{ name: "" }],
      lembFormal: [{ name: "" }],
      lembNonFormal: [{ name: "" }],
      pendFormal: [{ name: "" }],
      lainLain: [{ name: "" }],
      usaha: [{ name: "" }],
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
        {step === 5 && <Foto register={register} watch={watch} />}
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
        {step === 5 && "Foto Pesantren"}
      </>
    );
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === "object") formData.append(key, value[0]);
      formData.append(key, value);
    }

    addPesantren(formData);

    console.log(data);

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
              {step === 5 ? (
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
