import { useEffect, useState } from "react";
import API from "../../services/api";
import AdminLayout from "../../layouts/AdminLayout";

function PublishIssues() {

  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetchPublished();
  }, []);

  const fetchPublished = async () => {

    try {

      const res = await API.get("/published");

      setPapers(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>

      <h2 style={titleStyle}>
        Published Journal Issues
      </h2>

      <div style={gridStyle}>

        {papers.map((paper) => (

          <div key={paper._id} style={cardStyle}>

            <h3>{paper.title}</h3>

            <p>
              <b>Authors:</b>{" "}
              {paper.authors?.join(", ")}
            </p>

            <p>
              <b>Volume:</b> {paper.volume}
            </p>

            <p>
              <b>Issue:</b> {paper.issue}
            </p>

            <p>
              <b>DOI:</b> {paper.doi}
            </p>

            <a
              href={paper.fileUrl}
              target="_blank"
              rel="noreferrer"
              style={btnStyle}
            >
              Open PDF
            </a>

          </div>
        ))}
      </div>

    </AdminLayout>
  );
}

const titleStyle = {
  marginBottom: "25px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(300px,1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

const btnStyle = {
  display: "inline-block",
  marginTop: "10px",
  padding: "8px 14px",
  background: "#0B3C5D",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};

export default PublishIssues;