import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { latestEnrollments } from "@/redux/actions/latestEnrollmentActions";
import { bestStudents } from "@/redux/actions/bestStudentActions";
import enrollmentData from "../data/enrollmentData.json";
import studentData from "../data/studentData.json";
import DataCard from "@/components/DataCard";
import Sidebar from "@/components/Sidebar";
import TableComponent from "@/components/TableComponent";

const Overview = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const addDataToStore = () => {
      try {
        // Dispatch actions to add data to Redux store
        dispatch(latestEnrollments(enrollmentData.latestEnrollment));
        dispatch(bestStudents(studentData.bestStudents));

        // Store data in local storage
        localStorage.setItem(
          "enrollmentData",
          JSON.stringify(enrollmentData.latestEnrollment)
        );
        localStorage.setItem(
          "studentData",
          JSON.stringify(studentData.bestStudents)
        );
      } catch (error) {
        console.error("Error adding data to store:", error);
      }
    };

    addDataToStore();
  }, [dispatch]);

  return (
    <div className="flex bg-[#E5E7EB] w-full  ">
      <div className="h-screen fixed">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full flex-grow ml-32 mx-8">
        <div className="flex gap-4 w-full flex-grow mb-8">
          <DataCard stat="160" desc="total number of students" />
          <DataCard stat="12" desc="total number of courses" />
          <DataCard stat="$2000" desc="total amount earned" />
          <DataCard stat="Guitar" desc="Best performing course" />
          <DataCard stat="Flute" desc="Worst performing course" />
        </div>
        <div className="w-full flex flex-col gap-10">
          <TableComponent
            tableHeaders={enrollmentData.enrollmentHeaders}
            data={enrollmentData.latestEnrollment}
            rows={5}
            category="enrollment"
          />
          <TableComponent
            tableHeaders={studentData.studentHeaders}
            data={studentData.bestStudents}
            rows={5}
            category="student"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
