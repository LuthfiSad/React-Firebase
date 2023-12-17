import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import DashboardPage from "./Pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserThunkPage from "./Pages/userThunk";
import LinkButton from "./LinkButton";
import { useSelector } from "react-redux";

function App() {
  return (
    <Router>
      {/* <div className="fixed top-0 left-0 right-0 py-2 px-20 flex justify-between items-center">
        <h1 className="text-2xl font-bold">App</h1>
        <div className="flex gap-2">
          <Link to='/' className="border text-sm rounded hover:scale-105 px-2">Home</Link>
          <Link to='/register' className="border text-sm rounded hover:scale-105 px-2">Register</Link>
          <Link to='/dashboard' className="border text-sm rounded hover:scale-105 px-2">Dashboard</Link>
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/thunk" element={<UserThunkPage />} />
      </Routes>
      <LinkButton/>
    </Router>
  );
}

export default App;
