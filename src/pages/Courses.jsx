import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourse, showCourses } from "@/redux/actions/courseActions";
import courseData from "../data/courseData.json";
import add from "../assets/add.png";
import ButtonComponent from "@/components/ButtonComponent";
import Sidebar from "@/components/Sidebar";
import TableComponent from "@/components/TableComponent";
import FormModal from "@/components/FormModal";

const Courses = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  localStorage.setItem("courses", JSON.stringify(courseData.courseList));

  const [coursesState, setCoursesState] = useState();

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courseData.courseList));
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    dispatch(showCourses(storedCourses));
    setCoursesState(courses);
  }, [courses, dispatch]);

  const toggleModal = () => {
    setToggle((prev) => !prev);
  };

  const handleAddCourse = (newCourse) => {
    dispatch(addCourse(newCourse));
    toggleModal();
  };

  return (
    <div className="flex bg-[#E5E7EB] w-full">
      <div className="h-screen fixed">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full flex-grow ml-32 m-8 ">
        <h1 className="text-3xl font-semibold mb-8 text-[#83858B]">Courses</h1>
        {coursesState && (
          <div className="">
            <TableComponent
              tableHeaders={courseData.courseHeaders}
              data={coursesState}
              rows={10}
              category="course"
            />
          </div>
        )}
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
            <FormModal closeModal={toggleModal} onSubmit={handleAddCourse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
