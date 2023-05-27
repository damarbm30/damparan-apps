import { Link } from "react-router-dom";

import { arrowLeft } from "~/assets";

const Title = ({ children, hideButton }) => {
  return (
    <div className="mb-8 pt-3">
      <div className="relative">
        {!hideButton && (
          <Link to="/" className="relative z-10 flex w-fit cursor-pointer">
            <img src={arrowLeft} alt="arrow-left" width={10} height={18} />
          </Link>
        )}
        <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-bold text-primary">
          {children}
        </h1>
      </div>
    </div>
  );
};
export default Title;
