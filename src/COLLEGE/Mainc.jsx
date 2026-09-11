import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Role from "./Role";
import StudentLogin from "./StudentLogin";
import StudentSignup from "./StudentSignup";
// import Student from "./Student";
import Faculty from "./Faculty";
import Admin from "./Admin";


import HOD from "./HOD";
// import Admin from "./Admin";

function Mainc() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/role" element={<Role />} />

        {/* Individual Portals */}
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/admin" element={<Admin />} />
  

      <Route path="/hod" element={<HOD />} />
        {/*   // <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default Mainc;