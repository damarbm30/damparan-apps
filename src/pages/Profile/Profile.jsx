import { useNavigate } from "react-router-dom";

import { Title } from "~/components";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
