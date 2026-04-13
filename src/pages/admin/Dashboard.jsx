import { useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import AdminLayout from "../../layouts/AdminLayout";

function Dashboard() {
  const { submissions } = useContext(JournalContext);

  const total = submissions.length;
  const underReview = submissions.filter(
    (s) => s.status === "Submitted"
  ).length;

  const accepted = submissions.filter(
    (s) => s.status === "Accepted"
  ).length;

  const rejected = submissions.filter(
    (s) => s.status === "Rejected"
  ).length;

  return (
    <AdminLayout>
      <h2 style={titleStyle}>Admin Dashboard</h2>

      <div style={gridStyle}>
        <StatCard title="Total Submissions" value={total} />
        <StatCard title="Under Review" value={underReview} />
        <StatCard title="Accepted" value={accepted} />
        <StatCard title="Rejected" value={rejected} />
      </div>
    </AdminLayout>
  );
}

function StatCard({ title, value }) {
  return (
    <div style={cardStyle}>
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>
      <h2 style={{ fontWeight: "700" }}>{value}</h2>
    </div>
  );
}

const titleStyle = {
  marginBottom: "30px",
  fontSize: "32px",
  fontWeight: "700"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px"
};

const cardStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

export default Dashboard;