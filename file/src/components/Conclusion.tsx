
function ConclusionPage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        padding: "1rem",
        background:"#0a7ea3",
        color: "#333",
      }}
    >
      <h1 style={{ marginBottom: "1rem", color: "#fff" }}>Conclusion</h1>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        <strong>Disclaimer:</strong> The information provided on this website is for general informational purposes only. 
        We do not make any warranties about the completeness, reliability, and accuracy of this information. Any action 
        you take based on the information you find on this website is strictly at your own risk. We will not be liable 
        for any losses or damages in connection with the use of our website.
      </p>
      <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
        For more details, please visit:{" "}
        <a
          href="https://tamilyogi.org.in/i-keep-my-eyes-closed/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          https://tamilyogi.org.in/i-keep-my-eyes-closed/
        </a>
      </p>
    </div>
  );
}

export default ConclusionPage;
