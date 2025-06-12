import { useState, useEffect } from "react";
import Corenavbar from "../components/navbar";

export default function About() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("https://http.cat/200.jpg");

  // Načti náhodný fakt
  const fetchFact = async () => {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    const data = await response.json();
    setFact(data.data[0]); // Zobrazí pouze jeden fakt
  };

  // První načtení
  useEffect(() => {
    fetchFact();
  }, []);

  // Náhodný obrázek
  const randomCatImage = () => {
    const randomId = Math.floor(Math.random() * 10) + 200; // ID od 200 do 209
    setImageUrl(`https://http.cat/${randomId}.jpg`);
  };

  return (
    <>
      <Corenavbar />
      <div style={styles.page}>
        <h1 style={styles.title}>😺 Zajímavosti o kočkách</h1>

        <div style={styles.imageContainer}>
          <img src={imageUrl} alt="cat" style={styles.image} />
        </div>

        <div style={styles.factContainer}>
          <div style={styles.factCard}>
            🐾 {fact}
          </div>
        </div>

        <div style={styles.buttonArea}>
          <button style={styles.button} onClick={fetchFact}>Nový fakt</button>
          <button
            style={{ ...styles.button, backgroundColor: "#9ad1d4" }}
            onClick={randomCatImage}
          >
            Změnit obrázek
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
