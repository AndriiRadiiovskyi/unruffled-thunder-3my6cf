import React from "react";

function Gallery() {
  return (
    <div className="section-card">
      <h1>Фотогалерея Вінниці 📸</h1>
      <p>Ось як виглядає місто:</p>

      {/* Контейнер для розміщення фото поруч */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* Фото 1 */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1655105089392-5ec3ea3c96b2?q=80&w=2075&auto=format&fit=crop"
            alt="Вінниця"
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <p>
            <i>Панорамний вигляд міста</i>
          </p>
        </div>

        {/* Фото 2 */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1655105088739-af1d64d6dfe8?q=80&w=685&auto=format&fit=crop"
            alt="Вінниця"
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <p>
            <i>Архітектура міста</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
