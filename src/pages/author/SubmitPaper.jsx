import { useState, useContext } from "react";
import { JournalContext } from "../../context/JournalContext";
import AuthorLayout from "../../layouts/AuthorLayout";

function SubmitPaper() {
  const { addSubmission } = useContext(JournalContext);

  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    authorName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission(formData);
    alert("Paper submitted successfully!");

    setFormData({
      title: "",
      abstract: "",
      authorName: "",
    });
  };

  return (
    <AuthorLayout>
      <h2 style={titleStyle}>Submit Research Paper</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroup}>
          <label>Paper Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div style={inputGroup}>
          <label>Abstract</label>
          <textarea
            name="abstract"
            rows="4"
            value={formData.abstract}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div style={inputGroup}>
          <label>Author Name</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={submitBtn}>
          Submit Paper
        </button>
      </form>
    </AuthorLayout>
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

export default SubmitPaper;