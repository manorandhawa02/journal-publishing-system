import TopNavbar from "../components/TopNavbar";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TopNavbar role="Admin" />

      <div style={{ display: "flex" }}>
        <AdminSidebar />

        <div style={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

const contentStyle = {
  flex: 1,
  padding: "40px",
  backgroundColor: "#F4F6F9",
  minHeight: "100vh"
};

export default AdminLayout;