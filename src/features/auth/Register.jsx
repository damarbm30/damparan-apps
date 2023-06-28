import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

import { logo } from "~/assets";
import { useRegisterUserMutation } from "~/app/api/apiSlice";
import { useEffect } from "react";

const registerSchema = object().shape({
  first_name: string().required("Kolom ini tidak boleh kosong"),
  last_name: string().required("Kolom ini tidak boleh kosong"),
  email: string().email("Mohon tulis dengan format sesuai").required("Kolom ini tidak boleh kosong"),
  password: string().required("Kolom ini tidak boleh kosong"),
  confirmPassword: string()
    .required("Kolom ini tidak boleh kosong")
    .oneOf([ref("password")], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const [registerUser, { isSuccess }] = useRegisterUserMutation();

  const onSubmit = (data) => {
    const newUser = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };
    registerUser(newUser);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <section className="flex flex-col justify-center">
      {/* HEADING */}
      <div className="flex flex-col justify-center">
        {/* LOGO */}
        <img src={logo} alt="nu-logo" className="mx-auto mb-5" width={82} height={53} />
        <div className="mx-auto">
          <h1 className="text-center">Dashboard Pesantren</h1>
          <h1 className="text-center font-bold">RMI PWNU DIY</h1>
        </div>
      </div>
      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="font-bold">Nama Depan</label>
          <input
            type="text"
            placeholder="Isikan nama depan Anda"
            {...register("first_name")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.first_name?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Nama Belakang</label>
          <input
            type="text"
            placeholder="Isikan nama belakang Anda"
            {...register("last_name")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.last_name?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Email</label>
          <input
            type="text"
            placeholder="Isikan email Anda"
            {...register("email")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="Isikan password Anda"
            {...register("password")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.password?.message}</span>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <label className="font-bold">Confirm Password</label>
          <input
            type="password"
            placeholder="Isikan password Anda"
            {...register("confirmPassword")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.confirmPassword?.message}</span>
        </div>
        <input type="submit" value="Register" className="btn mx-auto max-w-fit bg-primary" />
      </form>
      <Link to="/login" className="mx-auto font-medium">
        Sudah memiliki akun? Login di sini
      </Link>
    </section>
  );
};
export default Register;
