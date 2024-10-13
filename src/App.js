// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PayrollForm from "./Pages/PayrollForm";
// import NavigationBar from './Pages/Navbar';
// import Dashboard from './Pages/Dashboard'
// import Employee from './Pages/Employee';
// import Leave from './Pages/Leave';
// import Attendance from './Pages/Attendance';
// import Payroll from './Pages/Payroll';
// import Administration from './Pages/Administration';
// import Settings from './Pages/Settings';

// function App() {
//     return (
//         <Router>
//             <NavigationBar />
//             <div className="container mt-4">
//                 <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/employee" element={<Employee />} />
//                     <Route path="/leave" element={<Leave />} />
//                     <Route path="/attendance" element={<Attendance />} />
//                     <Route path="/payroll" element={<PayrollForm />} />
//                     <Route path="/administration" element={<Administration />} />
//                     <Route path="/settings" element={<Settings />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PayrollForm from "./Pages/PayrollForm";
import NavigationBar from './Pages/Navbar';
import Dashboard from './Pages/Dashboard'
import Employee from './Pages/Employee';
import Leave from './Pages/Leave/Leave';
import Attendance from './Pages/Attendance';
import Administration from './Pages/Administration';
import Settings from './Pages/Settings';
import Payroll from "./Pages/Payroll";
import DailyLog from './Pages/DailyLog';
import TaskManagement from './Pages/Time/TaskManagement';
function App() {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    {/* Left-side Navbar */}
                    <div className="col-3 col-md-2 bg-light vh-100">
                        <NavigationBar />
                    </div>
                    
                    {/* Right-side Main Content */}
                    <div className="col-9 col-md-10">
                        <div className="container mt-4">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/employee" element={<Employee />} />
                                <Route path="/leave" element={<Leave />} />
                                <Route path="/attendance" element={<Attendance />} />
                                <Route path="/attendance/daily-log" component={DailyLog} />
                                <Route path="/payroll" element={<PayrollForm />} />
                                <Route path="/task" element={<TaskManagement />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
