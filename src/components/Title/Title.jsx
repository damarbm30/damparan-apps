import { Link } from "react-router-dom";

import { arrowLeft } from "~/assets";

const Title = ({ children, subTitle }) => {
  return (
    <div className="mb-8 pt-3">
      <div className="relative">
        <Link to="/" className="relative z-10 flex w-fit cursor-pointer">
          <img src={arrowLeft} alt="arrow-left" />
        </Link>
        <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-bold text-primary">
          {children}
        </h1>
        <h2 className="absolute left-1/2 top-1/2 mt-6 -translate-x-1/2 -translate-y-1/2 text-xs text-body">
          {subTitle}
        </h2>
      </div>
    </div>
  );
};
export default Title;
