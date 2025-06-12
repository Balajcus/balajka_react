import { useState } from "react";
import Adam from "../assets/Adam.jpg";
import Button from "../components/button";
import Corenavbar from "../components/navbar";

export default function Home() {
  const [age, setAge] = useState(20); // výchozí věk

  return (
    <>
      <Corenavbar />
      <div style={styles.page}>
        <h1 style={styles.title}>👤 Změň si věk</h1>

        <div style={styles.imageContainer}>
          <img src={Adam} alt="Adam" style={styles.image} />
        </div>

        <div style={styles.factContainer}>
          <div style={styles.factCard}>
            <p>👋 Ahoj, já jsem <strong>Adam</strong></p>

            <p>🎂 Věk: {age} let</p>
          </div>
        </div>

        <div style={styles.buttonArea}>
          <button style={styles.button} onClick={() => setAge(age + 1)}>Zvýšit věk</button>
          <button
            style={{ ...styles.button, backgroundColor: "#9ad1d4" }}
            onClick={() => setAge(age - 1)}
          >
            Snížit věk
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fffaf4",
    minHeight: "100vh",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#6a4c38",
    marginBottom: "1rem",
  },
  imageContainer: {
    margin: "1rem auto",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  },
  factContainer: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
  },
  factCard: {
    backgroundColor: "#fcecdc",
    padding: "1rem",
    borderRadius: "10px",
    width: "80%",
    maxWidth: "500px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    fontSize: "1.1rem",
    color: "#333",
  },
  buttonArea: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#ffc28a",
    color: "#333",
    cursor: "pointer",
    transition: "0.3s",
  },
};
