import { useContext, useMemo } from "react";
import { JournalContext } from "../../context/JournalContext";
import AdminLayout from "../../layouts/AdminLayout";

function AdminDashboard() {
  const { submissions } = useContext(JournalContext);

  // 🔥 Workflow-aware calculations (Springer-style states)
  const stats = useMemo(() => {
    const total = submissions.length;

    const submitted = submissions.filter(
      (s) => s.status === "Submitted"
    ).length;

    const underReview = submissions.filter(
      (s) => s.status === "Under Review"
    ).length;

    const minorRevision = submissions.filter(
      (s) => s.status === "Minor Revision"
    ).length;

    const majorRevision = submissions.filter(
      (s) => s.status === "Major Revision"
    ).length;

    const accepted = submissions.filter(
      (s) => s.status === "Accepted"
    ).length;

    const rejected = submissions.filter(
      (s) => s.status === "Rejected"
    ).length;

    const inProgress =
      submitted + underReview + minorRevision + majorRevision;

    return {
      total,
      submitted,
      underReview,
      minorRevision,
      majorRevision,
      accepted,
      rejected,
      inProgress,
    };
  }, [submissions]);

  return (
    <AdminLayout>
      <h2 style={titleStyle}>Editor Dashboard</h2>

      {/* MAIN STATS GRID */}
      <div style={gridStyle}>
        <StatCard title="Total Submissions" value={stats.total} />
        <StatCard title="Submitted" value={stats.submitted} />
        <StatCard title="Under Review" value={stats.underReview} />
        <StatCard title="Minor Revision" value={stats.minorRevision} />
        <StatCard title="Major Revision" value={stats.majorRevision} />
        <StatCard title="Accepted" value={stats.accepted} />
        <StatCard title="Rejected" value={stats.rejected} />
        <StatCard title="In Progress" value={stats.inProgress} />
      </div>

      {/* WORKFLOW INSIGHT SECTION */}
      <div style={workflowBox}>
        <h3 style={{ marginBottom: "15px" }}>
          Editorial Workflow Overview
        </h3>

        <div style={workflowSteps}>
          <Step label="Submitted" desc="New papers waiting for screening" />
          <Step label="Under Review" desc="Peer review in progress" />
          <Step label="Minor Revision" desc="Author must revise paper" />
          <Step label="Major Revision" desc="Major changes required" />
          <Step label="Accepted" desc="Ready for publication" />
          <Step label="Rejected" desc="Not suitable for publication" />
        </div>
      </div>
    </AdminLayout>
  );
}

/* ================= STAT CARD ================= */
function StatCard({ title, value }) {
  return (
    <div style={cardStyle}>
      <h4 style={{ marginBottom: "10px", color: "#555" }}>{title}</h4>
      <h2 style={{ fontWeight: "700", fontSize: "28px" }}>{value}</h2>
    </div>
  );
}

/* ================= WORKFLOW STEP ================= */
function Step({ label, desc }) {
  return (
    <div style={stepStyle}>
      <strong>{label}</strong>
      <p style={{ fontSize: "12px", color: "#666" }}>{desc}</p>
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
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const workflowBox = {
  marginTop: "40px",
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const workflowSteps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "15px",
};

const stepStyle = {
  padding: "15px",
  border: "1px solid #eee",
  borderRadius: "10px",
  backgroundColor: "#fafafa",
};

export default AdminDashboard;