import React, { useState } from "react";

function Infrastructure() {
  // Дані про школи
  const schools = [
    {
      id: 1,
      name: "Вінницький ліцей №1",
      address: "вул. Магістратська, 94",
      type: "Ліцей",
    },
    { id: 2, name: "Школа №2", address: "вул. Соборна, 94", type: "ЗЗСО" },
    {
      id: 3,
      name: "Фізико-математичний ліцей №17",
      address: "вул. Олександра Соловйова, 2",
      type: "Ліцей",
    },
    {
      id: 4,
      name: "Гуманітарна гімназія №1",
      address: "вул. Мури, 4",
      type: "Гімназія",
    },
    {
      id: 5,
      name: "Вінницький ліцей №7",
      address: "вул. Владислава Городецького, 21",
      type: "Ліцей",
    },
    {
      id: 6,
      name: "Школа №10",
      address: "вул. Андрія Первозванного, 22",
      type: "ЗЗСО",
    },
    { id: 7, name: "Школа №32", address: "вул. Бестужева, 11", type: "ЗЗСО" },
    {
      id: 8,
      name: "Вінницький ліцей №4",
      address: "вул. Гоголя, 18",
      type: "Ліцей",
    },
  ];

  // Логіка пагінації
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Скільки шкіл на одній сторінці

  // Вираховуємо індекси для поточного відображення
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = schools.slice(indexOfFirstItem, indexOfLastItem);

  // Створення кнопок пагінації
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(schools.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="section-card">
      <h1>Навчальні заклади Вінниці 🏫</h1>
      <p>Список провідних шкіл та ліцеїв міста:</p>

      <div style={{ marginTop: "20px" }}>
        {currentItems.map((school) => (
          <div
            key={school.id}
            className="attraction-card"
            style={{ marginBottom: "15px", borderLeft: "5px solid #ffc300" }}
          >
            <h3>{school.name}</h3>
            <p>
              📍 <b>Адреса:</b> {school.address}
            </p>
            <p>
              📂 <b>Тип:</b> {school.type}
            </p>
          </div>
        ))}
      </div>

      {/* Кнопки пагінації */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: currentPage === number ? "#003566" : "#ddd",
              color: currentPage === number ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Infrastructure;
