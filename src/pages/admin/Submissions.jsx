import { useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import AdminLayout from "../../layouts/AdminLayout";

function Submissions() {
  const { submissions, assignReviewer } = useContext(JournalContext);

  return (
    <AdminLayout>
      <h2 style={titleStyle}>All Submissions</h2>

      <div style={tableContainer}>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Reviewer</th>
                <th>Assign</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((paper) => (
                <tr key={paper.id}>
                  <td>{paper.title}</td>
                  <td>{paper.authorName}</td>
                  <td>{paper.status}</td>
                  <td>{paper.reviewer || "Not Assigned"}</td>
                  <td>
                    <button
                      style={assignBtn}
                      onClick={() =>
                        assignReviewer(paper.id, "Dr. Smith")
                      }
                    >
                      Assign Reviewer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
}

const titleStyle = {
  marginBottom: "30px",
  fontSize: "30px",
  fontWeight: "700"
};

const tableContainer = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse"
};

const assignBtn = {
  padding: "6px 14px",
  backgroundColor: "#0B3C5D",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default Submissions;