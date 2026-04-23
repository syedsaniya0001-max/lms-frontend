import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NewArrivals from "./NewArrivals";
import Help from "./Help";
import Logins from "./Logins";
import Admin from "./Admin";
import AdminMain from "./AdminMain";
import AdminStudentRequest from "./AdminStudentRequest";
import AdminFacultyRequest from "./AdminFacultyRequest";
import AdminLibrarianRequest from "./AdminLibrarianRequest";
import AdminProfile from "./AdminProfile";
import AdminBooks from "./AdminBooks";
import AdminStudentLogins from "./AdminStudentLogins";
import AdminFaculty from './AdminFaculty';
import AdminLibrarian from "./AdminLibrarian";
import AdminBackup from './AdminBackup';
import AdminRatings from './AdminRatings';

import LibrarianLogin from './LibrarianLogin';
import LibrarianDashboard from './LibrarianDashboard';
import LibrarianProfile from './LibrarianProfile';

import StudentLogin from "./StudentLogin";
import StudentDashboard from './StudentDashboard';
import StudentProfile from "./StudentProfile";
import StudentBooks from "./StudentBooks";
import StudentBorrow from "./StudentBorrow";
import StudentReturn from "./StudentReturn";

import FacultyLogin from "./FacultyLogin";
import FacultyDashboard from "./FacultyDashboard";
import FacultyProfile from "./FacultyProfile";
import FacultyBooks from "./FacultyBooks";
import FacultyBorrowHistory from "./FacultyBorrowHistory";
import FacultyReturnHistory from "./FacultyReturnHistory";
import FacultyRecommend from "./FacultyRecommend";
function Main() {
  return (
    <Router>
      <Routes>
        {/* Make sure these paths match what you type in the URL */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new" element={<NewArrivals />} />
         <Route path="/help" element={<Help />} />
         <Route path="/logins" element={<Logins />} />
         <Route path="/admin-login" element={<Admin />} />
         <Route path="/admin-mp" element={<AdminMain />} />
         <Route path="/admin-stu-req" element={<AdminStudentRequest />} />
         <Route path="/admin-fac-req" element={<AdminFacultyRequest />} />
         <Route path="/admin-lib-req" element={<AdminLibrarianRequest />} />
         <Route path="/admin-profile" element={<AdminProfile />} />
         <Route path="/admin-books" element={<AdminBooks />} />
         <Route path="/admin-student-logins" element={<AdminStudentLogins />} />
         <Route path="/admin-faculty" element={<AdminFaculty />} />
         <Route path="/admin-librarian" element={<AdminLibrarian />} />
         <Route path="/admin-backup" element={<AdminBackup />} />
         <Route path="/admin-ratings" element={<AdminRatings />} />
         
         <Route path="/librarian-login" element={<LibrarianLogin />} />
         <Route path="/librarian-dashboard" element={<LibrarianDashboard />} />
        <Route path="/librarian-profile" element={<LibrarianProfile />} />

        <Route path="/student-login" element={<StudentLogin/>}/>
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-books" element={<StudentBooks />} />
        <Route path="/student-borrow" element={<StudentBorrow />} />
        <Route path="/student-return" element={<StudentReturn />} />

        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard/>}/>
        <Route path="/faculty-profile" element={<FacultyProfile/>}/>
        <Route path="/faculty-books" element={<FacultyBooks/>}/>
        <Route path="/faculty-borrow" element={<FacultyBorrowHistory/>}/>
        <Route path="/faculty-return" element={<FacultyReturnHistory/>}/>
        <Route path="/faculty-recommend" element={<FacultyRecommend/>}/>
        
         
         

        
      </Routes>
    </Router>
  );
}

export default Main;