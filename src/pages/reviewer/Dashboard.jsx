import { useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import ReviewerLayout from "../../layouts/ReviewerLayout";

function Dashboard() {
  const { submissions } = useContext(JournalContext);

  const reviewerName = "Dr. Smith";

  const assigned = submissions.filter(
    (paper) => paper.reviewer === reviewerName
  );

  const pending = assigned.filter(
    (paper) => paper.status === "Submitted"
  );

  const accepted = assigned.filter(
    (paper) => paper.status === "Accepted"
  );

  const rejected = assigned.filter(
    (paper) => paper.status === "Rejected"
  );

  return (
    <ReviewerLayout>
      <h2 style={titleStyle}>Reviewer Dashboard</h2>

      <div style={gridStyle}>
        <StatCard title="Assigned Papers" value={assigned.length} />
        <StatCard title="Pending Reviews" value={pending.length} />
        <StatCard title="Accepted" value={accepted.length} />
        <StatCard title="Rejected" value={rejected.length} />
      </div>
    </ReviewerLayout>
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