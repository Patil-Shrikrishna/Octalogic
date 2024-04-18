import DataCard from "./components/DataCard";
import Sidebar from "./components/Sidebar";
import TableComponent from "./components/TableComponent";
import enrollmentData from "./data/enrollmentData.json";
import studentData from "./data/studentData.json";
import courseData from "./data/courseData.json";
function App() {
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
      </div>
    </div>
  );
}

export default App;
