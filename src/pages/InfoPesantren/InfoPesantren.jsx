import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Title } from "~/components";
import Identitas from "./Identitas";
import Keilmuan from "./Keilmuan";
import Pendidikan from "./Pendidikan";
import Tambahan from "./Tambahan";
import Foto from "./Foto";
import Modal from "./Modal";

const InfoPesantren = () => {
  const identitasSchema = yup.object().shape({
    pesantren: yup.string().required(),
    yayasan: yup.string().required(),
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
      return value && value.length;
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
    console.log(data);
    setShowModal(false);
    // const formData = new FormData();
    // for (const [key, value] of Object.entries(data)) {
    //   if (typeof value === "object") formData.append(key, value[0]);
    //   formData.append(key, value);
    // }
  };

  const changePage = (direction) => {
    if (direction === "next") setStep((prev) => prev + 1);
    else setStep((prev) => prev - 1);
  };

  return (
    <section>
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
            // <input type="submit" className="btn cursor-pointer" disabled={!isValid} />
            <Modal showModal={showModal} setShowModal={setShowModal} isValid={isValid} />
          ) : (
            <button type="button" className="btn bg-primary" onClick={() => changePage("next")} disabled={!isValid}>
              Berikutnya
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default InfoPesantren;
