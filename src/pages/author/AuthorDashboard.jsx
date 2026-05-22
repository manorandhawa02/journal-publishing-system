import AuthorLayout from "../../layouts/AuthorLayout";

function AuthorDashboard() {
  return (
    <AuthorLayout>
      <h2 style={titleStyle}>Author Dashboard</h2>

      <div style={gridStyle}>
        <StatCard title="Total Submissions" value="5" />
        <StatCard title="Under Review" value="2" />
        <StatCard title="Accepted" value="2" />
        <StatCard title="Rejected" value="1" />
      </div>
    </AuthorLayout>
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

export default AuthorDashboard;