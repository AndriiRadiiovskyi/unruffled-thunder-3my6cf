import React from "react";

function OtherAttractions() {
  const attractions = [
    {
      name: "Музей-садиба М. Пирогова",
      desc: "Садиба великого хірурга.",
      img: "https://vinnytsia.city/wp-content/uploads/2019/05/800px-Sadyba_Pyrogova-800x580.jpg",
    },
    {
      name: "Вінницький трамвай",
      desc: "Швейцарські вагони — символ міста.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Lenins%27kyi_District%2C_Vinnytsia%2C_Vinnyts%27ka_oblast%2C_Ukraine_-_panoramio_-_Leonid_Andronov_%288%29.jpg",
    },
    {
      name: "Вежа Артинова",
      desc: "Головний символ на площі.",
      img: "https://f.discover.ua/location/941/XaWbN.jpg",
    },
    {
      name: "Вінницькі Мури",
      desc: "Оборонні споруди XVII століття.",
      img: "https://vinnytsia.city/wp-content/uploads/2019/05/mury-1.jpg",
    },
    {
      name: "Подільський зоопарк",
      desc: "Унікальний куточок живої природи.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Lama700.jpg",
    },
    {
      name: "Центральний парк",
      desc: "Улюблене місце для прогулянок.",
      img: "https://vinnytsia.city/wp-content/uploads/2019/04/60595634_1305118156305944_5035750013829906432_o.jpg",
    },
    {
      name: "Ставка «Вервольф»",
      desc: "Історичний комплекс минулого.",
      img: "https://anga.ua/files/anga/reg_images/1_0024.jpg",
    },
    {
      name: "Музей ретро-техніки",
      desc: "Виставка авто минулих років.",
      img: "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/6120e7c95b3ab_%D0%9C%D1%83%D0%B7%D0%B5%D0%B9%20%D0%B0%D0%B2%D1%82%D0%BE%D1%84%D0%BE%D1%82%D0%BE%D0%B2%D0%B5%D0%BB%D0%BE%D0%BC%D0%BE%D1%82%D0%BE%D1%80%D0%B0%D0%B4%D1%96%D0%BE.jpg",
    },
    {
      name: "Парк «Поділля»",
      desc: "Сучасна зона відпочинку.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/%D0%9C%D1%96%D1%81%D1%82%D0%BE%D0%BA_%D0%B2_%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D1%96%D1%87%D0%BD%D0%BE%D0%BC%D1%83_%D1%81%D0%B0%D0%B4%D1%83_DSC_8663.JPG",
    },
    {
      name: "Обласний краєзнавчий музей»",
      desc: "Історичне минуле місцевості",
      img: "https://moemisto.ua/uploads/media/ckeditor/0003/92/ddfb11acf4127230ebf8988c3a90564ec741bfae.jpeg?hash=2019-03-15-12-32-35",
    },
  ];

  return (
    <div className="section-card">
      <h1>Визначні місця </h1>
      <div className="attractions-grid">
        {attractions.map((item, index) => (
          <div key={index} className="attraction-card">
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherAttractions;
