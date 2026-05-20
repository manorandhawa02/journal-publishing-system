import { useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import ReviewerLayout from "../../layouts/ReviewerLayout";

function ReviewerDashboard() {
  const { submissions, user } = useContext(JournalContext);

  // 🔥 REAL ASSIGNED PAPERS (NO HARD CODE)
  const assigned = submissions.filter((paper) =>
    paper.assignedReviewers?.includes(user._id)
  );

  const pending = assigned.filter(
    (paper) => paper.status === "Under Review" || paper.status === "Submitted"
  );

  const completed = assigned.filter(
    (paper) =>
      paper.status === "Accepted" ||
      paper.status === "Rejected" ||
      paper.status === "Minor Revision" ||
      paper.status === "Major Revision"
  );

  return (
    <ReviewerLayout>
      <h2 style={titleStyle}>Reviewer Dashboard</h2>

      {/* STATS */}
      <div style={gridStyle}>
        <StatCard title="Assigned Papers" value={assigned.length} />
        <StatCard title="Pending Reviews" value={pending.length} />
        <StatCard title="Completed Reviews" value={completed.length} />
      </div>

      {/* ASSIGNED PAPERS LIST */}
      <div style={{ marginTop: "40px" }}>
        <h3>Assigned Papers</h3>

        {assigned.map((paper) => (
          <div key={paper._id} style={cardStyle}>
            <h4>{paper.title}</h4>
            <p style={{ fontSize: "13px", color: "#666" }}>
              Status: {paper.status}
            </p>

            <button
              style={btnStyle}
              onClick={() => {
                window.location.href = `/reviewer/paper/${paper._id}`;
              }}
            >
              Review Paper
            </button>
          </div>
        ))}
      </div>
    </ReviewerLayout>
  );
}

/* ================= UI COMPONENT ================= */
function StatCard({ title, value }) {
  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

/* ================= STYLES ================= */

const titleStyle = {
  marginBottom: "30px",
  fontSize: "32px",
  fontWeight: "700",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
  marginBottom: "15px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  backgroundColor: "#2d6cdf",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
};

export default ReviewerDashboard;