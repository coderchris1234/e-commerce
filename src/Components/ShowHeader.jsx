import "../Pages/HeaderStyle.css";
const ShowHeader = () => {
  const content = [
    {
      title: "Catalog",
      description: "All Items",
      image:
        "https://lapetitealice.com/wp-content/uploads/Main-Menu-Thumbnail_Kids-All.jpg.webp",
    },
    {
      title: "Spring & Summer",
      description: "Tutti Fruitti",
      image:
        "https://lapetitealice.com/wp-content/uploads/Main-Menu-Thumbnail_Tutti-Frutti_2.jpg",
    },
    {
      title: "Autumm and Winter",
      description: "Warm Whispers",
      image:
        "https://lapetitealice.com/wp-content/uploads/Main-Menu-Thumbnail_Warm_Whispers.png",
    },
    {
      title: "Our Specialty",
      description: "Embroideries",
      image:
        "https://lapetitealice.com/wp-content/uploads/Main-Menu-Thumbnail_Embroideries.jpg.webp",
    },
  ];
  return (
    <>
      <div className="show_Header">
        <div className="show">
          <div className="dropdown_list">
            <h3>By Category</h3>
            <span>Dresses</span>
            <span>Jumpsuuits & Rompers</span>
            <span>Tops</span>
            <span>Pants</span>
            <span>Skirts</span>
            <span>Shorts & Bloomers</span>
            <span>Coats & Jackets</span>
            <span>Bonnets & Accessories</span>
            <span>Aprons</span>
            <span>Knitwear</span>
            <span>Beddings & Blankets</span>
            <span>Dolls & Plushies</span>
            <span>Bags & Hats</span>
          </div>

          <div className="image_container">
            {content.map((item, index) => {
              return (
                <div key={index} className="Content_box">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                  <img src={item.image} alt={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowHeader;
