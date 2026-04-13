import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import TopNavbar from "./components/TopNavbar";
import AuthorDashboard from "./pages/author/Dashboard";
import ReviewerDashboard from "./pages/reviewer/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import SubmitPaper from "./pages/author/SubmitPaper";
import AIAnalysis from "./pages/AIAnalysis";
import ReviewPaper from "./pages/reviewer/ReviewPaper";
import Comparison from "./pages/admin/Comparison";
import AdminSubmissions from "./pages/admin/Submissions";
import MyPapers from "./pages/reviewer/MyPapers";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        {/*TopNavbar*/}
        <Route path="/" element={<TopNavbar />}/>

        {/* Signup Route */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Author Route */}
        <Route
          path="/author"
          element={
            <ProtectedRoute allowedRole="author">
              <AuthorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Reviewer Route */}
        <Route
          path="/reviewer"
          element={
            <ProtectedRoute allowedRole="reviewer">
              <ReviewerDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/author/submit"
          element={
            <ProtectedRoute allowedRole="author">
              <SubmitPaper />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-analysis"
          element={
            <ProtectedRoute allowedRole="author">
              <AIAnalysis />
            </ProtectedRoute>
          }
        />
      <Route
  path="/reviewer/review/:id"
  element={
    <ProtectedRoute allowedRole="reviewer">
      <ReviewPaper />
    </ProtectedRoute>
  }
/>

        <Route
          path="/admin/comparison"
          element={
            <ProtectedRoute allowedRole="admin">
              <Comparison />
            </ProtectedRoute>
          }
        />
        <Route
  path="/admin/submissions"
  element={
    <ProtectedRoute allowedRole="admin">
      <AdminSubmissions />
    </ProtectedRoute>
  }
/>

<Route
  path="/reviewer/papers"
  element={
    <ProtectedRoute allowedRole="reviewer">
      <MyPapers />
    </ProtectedRoute>
  }
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
