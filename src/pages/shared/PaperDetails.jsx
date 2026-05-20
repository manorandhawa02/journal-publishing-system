import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { JournalContext } from "../../context/JournalContext";
import ReviewerLayout from "../../layouts/ReviewerLayout";

import {
  makeDecision,
  submitReview,
} from "../../services/paperService";

function PaperDetails() {
  const { id } = useParams();
  const { submissions } = useContext(JournalContext);

  const paper = submissions.find((p) => p._id === id);

  const [comments, setComments] = useState("");
  const [recommendation, setRecommendation] = useState("Accept");

  if (!paper) return <div>Loading...</div>;
    const handleDecision = async (decision) => {
    try {
      await makeDecision(paper._id, decision);
      alert("Decision updated");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Error updating decision");
    }
  };

  const handleSubmitReview = async () => {
    try {
      await submitReview(paper._id, {
        commentsToAuthor: comments,
        recommendation,
      });

      alert("Review submitted");
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Error submitting review");
    }
  };
    return (
    <ReviewerLayout>
      <div style={containerStyle}>
        <h1>{paper.title}</h1>

        <p style={statusStyle}>
          Status: {paper.status}
        </p>

        <div style={section}>
          <h3>Abstract</h3>
          <p>{paper.abstract}</p>
        </div>

        <div style={section}>
          <h3>Download Paper</h3>
          <a href={paper.fileUrl} target="_blank">
            Open File
          </a>
        </div>
                <div style={section}>
          <h3>Timeline</h3>

          {paper.timeline?.map((t, i) => (
            <p key={i}>
              • {t.action} (
              {new Date(t.date).toLocaleString()})
            </p>
          ))}
        </div>
                <div style={section}>
          <h3>Editorial Actions</h3>

          <button onClick={() => handleDecision("Accept")} style={btnAccept}>
            Accept
          </button>

          <button onClick={() => handleDecision("Minor Revision")} style={btnRev}>
            Minor Revision
          </button>

          <button onClick={() => handleDecision("Major Revision")} style={btnRev}>
            Major Revision
          </button>

          <button onClick={() => handleDecision("Reject")} style={btnReject}>
            Reject
          </button>
        </div>
                <div style={section}>
          <h3>Submit Review</h3>

          <textarea
            placeholder="Write comments to author..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={textarea}
          />

          <select
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            style={select}
          >
            <option>Accept</option>
            <option>Minor Revision</option>
            <option>Major Revision</option>
            <option>Reject</option>
          </select>

          <button onClick={handleSubmitReview} style={btnAccept}>
            Submit Review
          </button>
        </div>
      </div>
    </ReviewerLayout>
  );
}
const containerStyle = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
};

const section = {
  marginTop: "20px",
};

const statusStyle = {
  color: "#555",
  fontWeight: "bold",
};

const textarea = {
  width: "100%",
  height: "100px",
  marginTop: "10px",
};

const select = {
  marginTop: "10px",
  display: "block",
};

const btnAccept = {
  marginTop: "10px",
  marginRight: "10px",
  background: "green",
  color: "white",
  padding: "8px",
};

const btnRev = {
  marginTop: "10px",
  marginRight: "10px",
  background: "orange",
  color: "white",
  padding: "8px",
};

const btnReject = {
  marginTop: "10px",
  background: "red",
  color: "white",
  padding: "8px",
};

export default PaperDetails;