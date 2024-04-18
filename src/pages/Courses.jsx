import { useState } from "react";
import courseData from "../data/courseData.json";
import add from "../assets/add.png";
import ButtonComponent from "@/components/ButtonComponent";
import Sidebar from "@/components/Sidebar";
import TableComponent from "@/components/TableComponent";
import FormModal from "@/components/FormModal";

const Courses = () => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="flex bg-[#E5E7EB] w-full">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <div className="">
          <TableComponent
            tableHeaders={courseData.courseHeaders}
            data={courseData.courseList}
          />
        </div>
        <div className="fixed bottom-0 right-0 p-4">
          <ButtonComponent
            icon={add}
            name="Add Course"
            className="bg-[#FEC0CA] text-black text-xl py-10 px-10 shadow-md"
            onClick={toggleModal}
          />
        </div>
        {toggle && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
            <FormModal closeModal={toggleModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
