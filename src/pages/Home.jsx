import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  // Fade-in animation observer
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const publications = [
    {
      title: "AI-Based Image Recognition in Healthcare Diagnostics",
      authors: "Emaan Ajmal, Dr. Ahmed Raza",
      journal: "Vol. 12, Issue 1 (2026)",
      doi: "10.1234/gsjp.2026.001",
      abstract:
        "This study explores deep learning architectures for medical image classification and their impact on diagnostic accuracy.",
    },
    {
      title: "Blockchain-Free Web3 Architectures for Academic Systems",
      authors: "Ali Khan, Sara Malik",
      journal: "Vol. 12, Issue 1 (2026)",
      doi: "10.1234/gsjp.2026.002",
      abstract:
        "A scalable decentralized framework for secure and transparent academic manuscript workflows.",
    },
    {
      title: "Optimized Peer Review Assignment Using Machine Learning",
      authors: "Dr. Hassan Ali, Fatima Noor",
      journal: "Vol. 11, Issue 4 (2025)",
      doi: "10.1234/gsjp.2025.089",
      abstract:
        "An intelligent reviewer allocation model that improves review time and fairness.",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "700",
            marginBottom: "25px",
            letterSpacing: "-1px",
          }}
        >
          Scientific Journal Platform
        </h1>

        <p
          style={{
            maxWidth: "750px",
            marginBottom: "40px",
            fontSize: "18px",
            lineHeight: "1.8",
            opacity: 0.95,
          }}
        >
          A modern manuscript submission and peer-review system designed for
          transparent, efficient, and ethical academic publishing.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/signup">
            <button style={primaryBtn}>Get Started</button>
          </Link>

          <Link to="/login">
            <button style={secondaryBtn}>Login</button>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="fade-section" style={sectionLight}>
        <h2 style={sectionTitle}>About Our Platform</h2>
        <p style={sectionText}>
          Our system streamlines manuscript submission, peer review, editorial
          decisions, and publication workflows. Designed for authors, reviewers,
          and editors, the platform ensures transparency, efficiency, and
          academic integrity.
        </p>
      </section>

      {/* FEATURES */}
      <section className="fade-section" style={sectionDark}>
        <h2 style={sectionTitleWhite}>Core Features</h2>

        <div style={featuresContainer}>
          <FeatureCard
            title="Manuscript Submission"
            text="Authors submit research papers with structured metadata and track review progress."
          />
          <FeatureCard
            title="Peer Review Workflow"
            text="Reviewers evaluate submissions with scoring, comments, and recommendations."
          />
          <FeatureCard
            title="Editorial Decision System"
            text="Editors manage assignments, revisions, and final publication decisions."
          />
        </div>
      </section>

      {/* STATS */}
      <section className="fade-section" style={sectionLight}>
        <h2 style={sectionTitle}>Platform Statistics</h2>

        <div style={statsContainer}>
          <StatBox target={250} label="Submissions" suffix="+" />
          <StatBox target={120} label="Active Reviewers" suffix="+" />
          <StatBox target={85} label="Acceptance Rate" suffix="%" />
          <StatBox target={30} label="Avg Review Time" suffix=" Days" />
        </div>
      </section>

      {/* LATEST PUBLICATIONS */}
      <section className="fade-section" style={sectionLight}>
        <h2 style={sectionTitle}>Latest Publications</h2>

        <div style={publicationContainer}>
          {publications.map((paper, index) => (
            <PublicationCard key={index} paper={paper} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footerStyle}>
        © 2026 Global Scientific Journal Platform | All Rights Reserved
      </footer>
    </div>
  );
}

/* FEATURE CARD */
function FeatureCard({ title, text }) {
  return (
    <div className="feature-card" style={featureCard}>
      <h4>{title}</h4>
      <p style={{ fontSize: "14px" }}>{text}</p>
    </div>
  );
}

function PublicationCard({ paper }) {
  return (
    <div style={publicationCard}>
      <h4 style={{ marginBottom: "10px", fontWeight: "600" }}>{paper.title}</h4>

      <p style={metaStyle}>{paper.authors}</p>

      <p style={metaStyle}>{paper.journal}</p>

      <p style={doiStyle}>DOI: {paper.doi}</p>

      <p style={abstractStyle}>{paper.abstract}</p>

      <button style={viewBtn}>View Article</button>
    </div>
  );
}

/* STAT BOX */
function StatBox({ target, label, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div style={statBox}>
      <h3 style={{ fontSize: "36px", fontWeight: "700" }}>
        {count}
        {suffix}
      </h3>
      <p style={{ marginTop: "10px", fontSize: "15px" }}>{label}</p>
    </div>
  );
}

/* STYLES */
const heroStyle = {
  minHeight: "90vh",
  background: "linear-gradient(135deg, #0B3C5D, #328CC1)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "40px",
};

const sectionLight = {
  padding: "100px 20px",
  textAlign: "center",
};

const sectionDark = {
  padding: "100px 20px",
  backgroundColor: "#0B3C5D",
  color: "white",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "40px",
  marginBottom: "25px",
  fontWeight: "700",
};

const sectionTitleWhite = {
  fontSize: "40px",
  marginBottom: "40px",
  fontWeight: "700",
};

const sectionText = {
  maxWidth: "800px",
  margin: "0 auto",
  fontSize: "16px",
  lineHeight: "1.8",
};

const featuresContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "40px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const featureCard = {
  backgroundColor: "white",
  color: "#0B3C5D",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
  textAlign: "center",
};

const statsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
  marginTop: "30px",
};

const statBox = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "16px",
  width: "220px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const primaryBtn = {
  padding: "12px 30px",
  backgroundColor: "white",
  color: "#0B3C5D",
  border: "none",
  borderRadius: "25px",
  fontWeight: "600",
  cursor: "pointer",
};

  const secondaryBtn = {
  padding: "12px 30px",
  backgroundColor: "transparent",
  color: "white",
  border: "2px solid white",
  borderRadius: "25px",
  fontWeight: "600",
  cursor: "pointer",
};

const footerStyle = {
  backgroundColor: "#0B3C5D",
  color: "white",
  textAlign: "center",
  padding: "25px",
  marginTop: "40px",
};
const publicationContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
  maxWidth: "1100px",
  margin: "40px auto 0 auto",
};

const publicationCard = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  textAlign: "left",
};

const metaStyle = {
  fontSize: "14px",
  color: "#555",
  marginBottom: "5px",
};

const doiStyle = {
  fontSize: "13px",
  color: "#0B3C5D",
  fontWeight: "600",
  marginBottom: "15px",
};

const abstractStyle = {
  fontSize: "14px",
  lineHeight: "1.6",
  marginBottom: "20px",
  color: "#333",
};

const viewBtn = {
  padding: "8px 18px",
  backgroundColor: "#0B3C5D",
  color: "white",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  fontSize: "13px",
};

export default Home;
