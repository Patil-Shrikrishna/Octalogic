import DataCard from "./component/DataCard";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex bg-[#E5E7EB]">
      <div className="w-1/12 ">
        <Sidebar />
      </div>
      <div className="w-11/12">
        <div className="flex gap-4">
          <DataCard number="160" desc="total number of students" />
          <DataCard number="12" desc="total number of courses" />
          <DataCard number="$2000" desc="total amount earned" />
          <DataCard number="Guitar" desc="Best performing course" />
          <DataCard number="Flute" desc="Worst performing course" />
        </div>
      </div>
    </div>
  );
}

export default App;
