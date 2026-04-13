// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import NewsList from "./pages/NewsList";
// import CreateNews from "./pages/CreateNews";
// import CreateJob from "./pages/CreateJob";
// import Contacts from "./pages/Contacts";
// import Applicants from "./pages/Applicants";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <Routes>
//       {/* 🔐 Protected Routes */}
//        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//       <Route path="/news" element={<ProtectedRoute><NewsList /></ProtectedRoute>} />
//       <Route path="/create" element={<ProtectedRoute><CreateNews /></ProtectedRoute>} />
//       <Route path="/create-job" element={<ProtectedRoute><CreateJob /></ProtectedRoute>} />
//       <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
//       <Route path="/applicants" element={<ProtectedRoute><Applicants /></ProtectedRoute>} />


      
      
//       {/* 🔓 Public Routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot" element={<ForgotPassword />} />
//       <Route path="/reset" element={<ResetPassword />} />


//     </Routes>
//   );
// }


import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import CreateNews from "./pages/CreateNews";
import CreateJob from "./pages/CreateJob";
import Contacts from "./pages/Contacts";
import ResetPassword from "./pages/ResetPassword";

import Login from "./pages/Login";


export default function App() {
  return (
    <Routes>

      {/* 🔐 Protected */}
      <Route element={<ProtectedRoute />}>
        
        {/* Layout ONLY ONCE */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/create" element={<CreateNews />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reset" element={<ResetPassword />} />
         
        </Route>

      </Route>

      {/* Public */}
      <Route path="/login" element={<Login />} />
     
    

    </Routes>
  );
}