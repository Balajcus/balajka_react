import React, { useState } from "react";
import Corenavbar from "../components/navbar";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    // item vypadá jako "./Adam_20.jpg"
    const key = item.match(/Adam_(\d+)\.jpg$/)[1]; // získá číslo věku jako string
    images[key] = r(item);
  });
  return images;
};

// Naimportujeme všechny obrázky z img složky
const images = importAll(require.context("./img", false, /\.jpg$/));

export default function Home() {
  const [age, setAge] = useState(20);

  const getImageByAge = (age) => {
    return images[age] || null; // pokud neexistuje obrázek pro věk, vrátí null
  };

  const increaseAge = () => setAge((prev) => (prev < 100 ? prev + 1 : prev));
  const decreaseAge = () => setAge((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <>
      <Corenavbar />
      <div style={styles.page}>
        <h1 style={styles.title}>👤 Změň si věk</h1>

        <div style={styles.imageContainer}>
          {getImageByAge(age) ? (
            <img
              src={getImageByAge(age)}
              alt={`Adam ve věku ${age}`}
              style={styles.image}
            />
          ) : (
            <p>Obrázek pro věk {age} není k dispozici.</p>
          )}
        </div>

        <div style={styles.factContainer}>
          <div style={styles.factCard}>
            <p>👋 Ahoj, já jsem <strong>Adam</strong></p>
            <p>🎂 Věk: {age} let</p>
          </div>
        </div>

        <div style={styles.buttonArea}>
          <button style={styles.button} onClick={increaseAge}>
            Zvýšit věk
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#9ad1d4" }}
            onClick={decreaseAge}
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
