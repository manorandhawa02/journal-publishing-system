import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
  getAllPapers,
  assignReviewer,
  acceptPaper,
  rejectPaper,
} from "../../services/paperService";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const data = await getAllPapers();

      setSubmissions(data);
    } catch (err) {
      console.log(err);

      alert("Failed to load papers");
    }
  };
  const handleAssignReviewer = async (paperId) => {
    try {
      const reviewerId = prompt("Enter Reviewer User ID");

      if (!reviewerId) return;

      await assignReviewer(paperId, reviewerId);

      alert("Reviewer assigned");

      fetchPapers();
    } catch (err) {
      console.log(err);

      alert("Assignment failed");
    }
  };
  const handleAccept = async (paperId) => {
    try {
      await acceptPaper(paperId);

      alert("Paper accepted");

      fetchPapers();
    } catch (err) {
      console.log(err);

      alert("Accept failed");
    }
  };
  const handleReject = async (paperId) => {
    try {
      const reason = prompt("Enter rejection reason");

      await rejectPaper(paperId, reason);

      alert("Paper rejected");

      fetchPapers();
    } catch (err) {
      console.log(err);

      alert("Reject failed");
    }
  };

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
                <tr key={paper._id}>
                  <td>{paper.title}</td>
                  <td>{paper.author?.name || "Unknown"}</td>
                  <td>{paper.status}</td>
                  <td>{paper.reviewer || "Not Assigned"}</td>
                  <td>
                    <button
                      style={assignBtn}
                      onClick={async () => {
                        try {
                          const reviewerId = prompt(
                            "Enter Reviewer MongoDB ID",
                          );

                          if (!reviewerId) return;

                          await assignReviewer(paper._id, reviewerId);

                          alert("Reviewer Assigned");
                        } catch (error) {
                          console.log(error);

                          alert("Assignment failed");
                        }
                      }}
                    >
                      Assign Reviewer
                    </button>
                    <button
                      style={assignBtn}
                      onClick={() => handleAccept(paper._id)}
                    >
                      Accept
                    </button>

                    <button
                      style={{
                        ...assignBtn,
                        marginLeft: "10px",
                        backgroundColor: "crimson",
                      }}
                      onClick={() => handleReject(paper._id)}
                    >
                      Reject
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
  fontWeight: "700",
};

const tableContainer = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const assignBtn = {
  padding: "6px 14px",
  backgroundColor: "#0B3C5D",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Submissions;
