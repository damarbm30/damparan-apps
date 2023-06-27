import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Title } from "~/components";
import { useLogoutUserMutation } from "~/app/api/apiSlice";

const Profile = () => {
  const navigate = useNavigate();
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      Cookies.remove("_accToken");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <section>
      <Title>Profile</Title>
      <button className="btn mx-auto flex bg-danger" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
};
export default Profile;
