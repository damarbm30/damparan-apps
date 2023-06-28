import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { googleLogo, logo } from "~/assets";
import { setToken } from "./authSlice";
import { useLoginUserMutation } from "~/app/api/apiSlice";

const loginSchema = object().shape({
  email: string().email("Mohon tulis dengan format sesuai").required("Kolom ini tidak boleh kosong"),
  password: string().required("Kolom ini tidak boleh kosong"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const dispatch = useDispatch();
  const [loginUser, { data: loginResponse, isSuccess }] = useLoginUserMutation();

  const onSubmit = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(loginResponse.token));
      Cookies.set("_accToken", loginResponse.token, { expires: 1 / 48 });

      if (loginResponse.token) navigate("/");
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
          <label className="font-bold">Email</label>
          <input
            type="text"
            placeholder="Isikan email Anda"
            {...register("email")}
            className="rounded-md border px-2 py-1"
          />
        </div>
        <span className="text-danger">{errors.email?.message}</span>
        <div className="mb-8 flex flex-col gap-2">
          <label className="font-bold">Password</label>
          <input
            type="password"
            placeholder="Isikan password Anda"
            {...register("password")}
            className="rounded-md border px-2 py-1"
          />
          <span className="text-danger">{errors.password?.message}</span>
        </div>
        <input type="submit" value="Login" className="btn mx-auto max-w-fit bg-primary" />
      </form>
      {/* sign in google */}
      {/* <div className="mb-4 flex flex-col gap-2">
        <span className="text-center font-bold">Or</span>
        <button className="btn flex items-center justify-center gap-2 text-black shadow-md">
          <img src={googleLogo} width={20} height={20} /> Sign in with Google
        </button>
      </div> */}
      <Link to="/register" className="mx-auto font-medium">
        Belum memiliki akun? Daftar di sini
      </Link>
    </section>
  );
};
export default Login;
