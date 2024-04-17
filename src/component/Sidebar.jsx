import logo from "../assets/Logo.png";
import logout from "../assets/logout.png";
import home from "../assets/home.png";
import courses from "../assets/courses.png";
const Sidebar = () => {
  return (
    <div className="bg-white px-4 h-full min-h-screen flex flex-col gap-4 justify-between">
      {/* logo */}
      <div className="flex flex-col">
        <div className="flex justify-center items-center mb-4">
          <img src={logo} className="w-16" />
        </div>
        {/* menu */}
        <div className=" flex flex-col  justify-between gap-4 ">
          {/* top */}
          <div className="flex  flex-col gap-4">
            <div className="flex flex-col justify-center items-center rounded-md bg-[#FEDFE1] text-[#901E75] p-2 h-[60px] ">
              <img src={home} className="w-6" />
              <p>Home</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-md bg-[#E5E7EB] text-[#83858B] p-2 h-[60px] ">
              <img src={courses} className="w-6" />
              <p>Courses</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col  justify-center items-center text-[#83858B] ">
        <img src={logout} className="w-6" />
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
