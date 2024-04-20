import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
function App() {
  return (
    <div className="flex bg-[#E5E7EB]">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
