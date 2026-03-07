import React, { useState, useEffect } from "react";

function Feedback() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("myReviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : [{ name: "Олександр", rating: 5, text: "Вінниця — неймовірне місто!" }];
  });

  const [formData, setFormData] = useState({ name: "", text: "", rating: 5 });

  useEffect(() => {
    localStorage.setItem("myReviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...formData }]);
    setFormData({ name: "", text: "", rating: 5 });
  };

  return (
    <div className="section-card">
      <h1>Відгуки про місто</h1>

      <form
        onSubmit={handleSubmit}
        className="attraction-card"
        style={{ marginBottom: "30px" }}
      >
        <h3>Додати свій відгук</h3>
        <input
          placeholder="Ваше ім'я"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <select
          onChange={(e) =>
            setFormData({ ...formData, rating: parseInt(e.target.value) })
          }
          value={formData.rating}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>
              {num} зірок
            </option>
          ))}
        </select>
        <textarea
          placeholder="Ваш відгук"
          required
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          value={formData.text}
          style={{
            width: "100%",
            padding: "8px",
            height: "80px",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#ffc300",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Опублікувати
        </button>
      </form>

      <div>
        {reviews.map((rev, index) => (
          <div
            key={index}
            className="attraction-card"
            style={{
              marginBottom: "15px",
              borderLeft: "5px solid #003566",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#003566",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
                flexShrink: 0,
              }}
            >
              {rev.name[0].toUpperCase()}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{rev.name}</strong>
                <div style={{ color: "#ffc300" }}>{"★".repeat(rev.rating)}</div>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "5px",
                  marginBottom: "0",
                }}
              >
                "{rev.text}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
