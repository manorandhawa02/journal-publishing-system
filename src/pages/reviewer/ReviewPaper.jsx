import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ReviewerLayout from "../../layouts/ReviewerLayout";
import { submitReview } from "../../services/paperService";

function ReviewPaper() {
  const { id } = useParams();

  const [review, setReview] = useState({
    score: "",
    comments: "",
    recommendation: "",
  });

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await submitReview(id, {
      commentsToAuthor: review.comments,
      confidentialComments: "",
      recommendation: review.recommendation,
      rating: review.score,
    });

    alert("Review Submitted Successfully");

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Review submission failed"
    );
  }
};

  return (
    <ReviewerLayout>
      <h2 style={titleStyle}>Review Paper</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroup}>
          <label>Score (1–10)</label>
          <input
            type="number"
            name="score"
            min="1"
            max="10"
            onChange={handleChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Comments</label>
          <textarea
            rows="4"
            name="comments"
            onChange={handleChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Recommendation</label>
          <select
            name="recommendation"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Accepted">Accept</option>
            <option value="Minor Revision">Minor Revision</option>
            <option value="Major Revision">Major Revision</option>
            <option value="Rejected">Reject</option>
          </select>
        </div>

        <button type="submit" style={submitBtn}>
          Submit Review
        </button>
      </form>
    </ReviewerLayout>
  );
}

const titleStyle = {
  marginBottom: "30px",
  fontSize: "30px",
  fontWeight: "700"
};

const formStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  maxWidth: "600px"
};

const inputGroup = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px"
};

const submitBtn = {
  padding: "10px 20px",
  backgroundColor: "#0B3C5D",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default ReviewPaper;