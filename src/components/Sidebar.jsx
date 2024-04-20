import logo from "../assets/Logo.png";
import logoutIcon from "../assets/logout.png";
import home from "../assets/home.png";
import courses from "../assets/courses.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!auth.isAuthenticated) {
      console.log("Logged out");
      navigate("/");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="bg-white px-4 min-h-screen flex flex-col gap-4 justify-between">
      {/* logo */}
      <div className="flex flex-col">
        <div className="flex justify-center items-center mb-4">
          <img src={logo} className="w-16" />
        </div>
        {/* menu */}
        <div className=" flex flex-col  justify-between gap-4 ">
          {/* top */}
          <div className="flex  flex-col gap-4">
            <Link to="/">
              <div className="flex flex-col justify-center items-center rounded-md bg-[#FEDFE1] text-[#901E75] p-2 h-[60px] ">
                <img src={home} className="w-6" />
                <p>Home</p>
              </div>
            </Link>
            <Link to="/courses">
              <div className="flex flex-col justify-center items-center rounded-md bg-[#E5E7EB] text-[#83858B] p-2 h-[60px] ">
                <img src={courses} className="w-6" />
                <p>Courses</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div
        className="flex flex-col  justify-center items-center text-[#83858B]"
        onClick={handleLogout}
      >
        <img src={logoutIcon} className="w-6" />
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
