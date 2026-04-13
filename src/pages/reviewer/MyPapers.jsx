import { useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import { Link } from "react-router-dom";
import ReviewerLayout from "../../layouts/ReviewerLayout";

function MyPapers() {
  const { submissions } = useContext(JournalContext);

  const reviewerName = "Dr. Smith";

  const assigned = submissions.filter(
    (paper) => paper.reviewer === reviewerName
  );

  return (
    <ReviewerLayout>
      <h2 style={titleStyle}>Assigned Papers</h2>

      {assigned.length === 0 ? (
        <p>No papers assigned.</p>
      ) : (
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {assigned.map((paper) => (
                <tr key={paper.id}>
                  <td>{paper.title}</td>
                  <td>{paper.authorName}</td>
                  <td>{paper.status}</td>
                  <td>
                    <Link to={`/reviewer/review/${paper.id}`}>
                      <button style={reviewBtn}>Review</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ReviewerLayout>
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

const reviewBtn = {
  padding: "6px 14px",
  backgroundColor: "#0B3C5D",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default MyPapers;