import { Link } from "react-router-dom";

import { googleLogo, logo } from "~/assets";

const Login = () => {
  return (
    <section className="flex flex-col justify-center">
      {/* heading */}
      <div className="flex flex-col justify-center">
        {/* logo */}
        <img src={logo} alt="nu-logo" className="mx-auto mb-5" width={82} height={53} />
        <div className="mx-auto">
          <h1 className="text-center">Dashboard Pesantren</h1>
          <h1 className="text-center font-bold">RMI PWNU DIY</h1>
        </div>
      </div>
      {/* form */}
      <form className="mb-2 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label className="font-bold">Username</label>
          <input type="text" placeholder="Isikan username Anda" className="rounded-md border px-2 py-1" />
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <label className="font-bold">Password</label>
          <input type="password" placeholder="Isikan password Anda" className="rounded-md border px-2 py-1" />
        </div>
        <input type="submit" className="btn bg-primary" value="Login" />
      </form>
      {/* sign in google */}
      {/* <div className="mb-4 flex flex-col gap-2">
        <span className="text-center font-bold">Or</span>
        <button className="btn flex items-center justify-center gap-2 text-black shadow-md">
          <img src={googleLogo} width={20} height={20} /> Sign in with Google
        </button>
      </div> */}
      <Link to="/" className="flex justify-center font-medium text-blue-600 underline">
        Lupa Password?
      </Link>
    </section>
  );
};
export default Login;
