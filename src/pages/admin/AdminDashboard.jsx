import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getAdminStats } from "../../services/paperService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    submitted: 0,
    underReview: 0,
    minorRevision: 0,
    majorRevision: 0,
    accepted: 0,
    rejected: 0,
    inProgress: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getAdminStats();
      setStats(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <h2 style={titleStyle}>Editor Dashboard</h2>

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
    </AdminLayout>
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
  padding: "25px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

export default AdminDashboard;