import "./SalesStyle.css";
import Discount from "../Components/Discount";
import { useState } from "react";
const Sales = () => {
  const list = [
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
    {
      image:
        "https://i0.wp.com/lapetitealice.com/wp-content/uploads/X-EMB-SS25STR.jpg?resize=300%2C450&ssl=1",
      title: "Mini Strawberry (1.1×1.3cm)",
      slashprice: "€9.00",
      price: " €4.50",
      discount: true,
      val: "(excl. VAT)",
    },
  ];
  return (
    <div className="sales_container">
      <div className="sales_descp">
        <p>Our Specialty</p>
        <p>Handmade Embroideries</p>
        <p className="top-link">
          <a href="">EXPLORE THE SELECTION</a>
        </p>
      </div>
      <div className="Sales_body">
        {list.map((item, index) => {
          return (
            <div key={index} className="content">
              {item.discount && <Discount />}
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <div className="price">
                <span className="slash">{item.slashprice}</span>
                <span className="main-price">{item.price}</span>
                <span>{item.val}</span>
              </div>
              {}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Sales;
