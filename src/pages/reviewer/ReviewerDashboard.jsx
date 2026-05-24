import { useEffect, useState } from "react";
import ReviewerLayout from "../../layouts/ReviewerLayout";
import { getAssignedPapers } from "../../services/reviewService";

function ReviewerDashboard() {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetchAssignedPapers();
  }, []);

  const fetchAssignedPapers = async () => {
    try {
      const data = await getAssignedPapers();
      setPapers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const pending = papers.filter(
    (p) => p.status === "Under Review" || p.status === "Submitted"
  );

  const completed = papers.filter(
    (p) =>
      p.status === "Accepted" ||
      p.status === "Rejected" ||
      p.status === "Minor Revision" ||
      p.status === "Major Revision"
  );

  return (
    <ReviewerLayout>
      <h2 style={titleStyle}>Reviewer Dashboard</h2>

      {/* STATS */}
      <div style={gridStyle}>
        <StatCard title="Assigned Papers" value={papers.length} />
        <StatCard title="Pending Reviews" value={pending.length} />
        <StatCard title="Completed Reviews" value={completed.length} />
      </div>

      {/* ASSIGNED PAPERS */}
      <div style={{ marginTop: "40px" }}>
        <h3>Assigned Papers</h3>

        {papers.length === 0 ? (
          <p>No papers assigned yet.</p>
        ) : (
          papers.map((paper) => (
            <div key={paper._id} style={cardStyle}>
              <h4>{paper.title}</h4>
              <p style={{ fontSize: "13px", color: "#666" }}>
                Status: {paper.status}
              </p>

              <button
                style={btnStyle}
                onClick={() =>
                  (window.location.href = `/reviewer/review/${paper._id}`)
                }
              >
                Review Paper
              </button>
            </div>
          ))
        )}
      </div>
    </ReviewerLayout>
  );
}

/* ================= COMPONENT ================= */
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