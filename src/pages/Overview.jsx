import enrollmentData from "../data/enrollmentData.json";
import studentData from "../data/studentData.json";
import courseData from "../data/courseData.json";
import add from "../assets/add.png";
import ButtonComponent from "@/components/ButtonComponent";
import DataCard from "@/components/DataCard";
import Sidebar from "@/components/Sidebar";
import TableComponent from "@/components/TableComponent";
import FormModal from "@/components/FormModal";
const Overview = () => {
  return (
    <div className="flex bg-[#E5E7EB]">
      <div className="w-1/12 ">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <div className="flex gap-4">
          <DataCard stat="160" desc="total number of students" />
          <DataCard stat="12" desc="total number of courses" />
          <DataCard stat="$2000" desc="total amount earned" />
          <DataCard stat="Guitar" desc="Best performing course" />
          <DataCard stat="Flute" desc="Worst performing course" />
        </div>
        <ButtonComponent
          icon={add}
          name="Add Course"
          className="bg-[#FEC0CA] text-black text-xl py-10 px-10 shadow-md"
        />

        <ButtonComponent
          name="Add Course"
          className="bg-[#FEC0CA] text-black text-xl py-6 px-8"
        />
        <TableComponent
          tableHeaders={enrollmentData.enrollmentHeaders}
          data={enrollmentData.latestEnrollment}
        />
        <TableComponent
          tableHeaders={studentData.studentHeaders}
          data={studentData.bestStudents}
        />
        <TableComponent
          tableHeaders={courseData.courseHeaders}
          data={courseData.courseList}
        />
        <div className="flex justify-center items-center ">
          <FormModal />
        </div>
      </div>
    </div>
  );
};

export default Overview;