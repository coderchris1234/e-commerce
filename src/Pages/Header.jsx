import { useState, useEffect } from "react";
import "./HeaderStyle.css";
import Icons from "../Components/Icons";
import ShowHeader from "../Components/ShowHeader";

const Header = () => {
  const texts = [
    "CURRENT PROCESSING TIME IS 1-2 WEEKS",
    "FREE SHIPPING WORLDWIDE FROM 150€",
    "SHOPPING FROM THE US? WE TAKE CARE OF ALL CUSTOMS & DUTIES!",
  ];
  const [index, setIndex] = useState(0);
  const [Show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((preIndex) => (preIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <>
      <div className="Header">
        <div className="Header_Container">
          <div className="icon-container">
            <Icons class="fa-brands fa-instagram" />
            <Icons class="fa-brands fa-facebook" style={{ color: "white" }} />
            <Icons class="fa-brands fa-pinterest" style={{ color: "white" }} />
            <Icons class="fa-brands fa-youtube" style={{ color: "white" }} />
            <Icons class="fa-brands fa-tiktok" style={{ color: "white" }} />
            <Icons class="fa-brands fa-linkedin" style={{ color: "white" }} />
          </div>
          <span className="fade-text">{texts[index]}</span>
          <div className="currency">
            <span style={{ fontSize: "10px" }}>EU</span>
            <Icons class="fa-solid fa-euro-sign" style={{ color: "white" }} />
            <h2>EUR</h2>
          </div>
        </div>
        <div className="second_header">
          <div className="second_header_wrapper">
            <img
              className="img_header"
              src="https://lapetitealice.com/wp-content/uploads/logo_la-petite-alice_dark_email.svg"
              alt=""
              width={"150px"}
            />
            <div className="second_header_item_lists">
              <nav>
                <ul>
                  <li
                    onMouseEnter={() => setShow(true)}
                    onClick={() => setShow(false)}
                  >
                    Babies & Kids
                    <Icons class="fa-solid fa-chevron-down" />
                  </li>
                  <li>
                    Women <Icons class="fa-solid fa-chevron-down" />
                  </li>
                  <li>
                    Men <Icons class="fa-solid fa-chevron-down" />
                  </li>
                  <li>
                    Home <Icons class="fa-solid fa-chevron-down" />
                  </li>
                  <li>
                    About <Icons class="fa-solid fa-chevron-down" />
                  </li>
                  <li>Ready to Ship Shop</li>
                  <span className="New_text">New</span>
                </ul>
                {Show && (
                  <div className="setShow_container">
                    <ShowHeader />
                  </div>
                )}
              </nav>
            </div>
          </div>
          <div className="icon_container">
            <Icons class="fa-solid fa-magnifying-glass" />
            <Icons class="fa-solid fa-circle-user" />
            <span>
              <Icons class="fa-solid fa-euro-sign" />
              0.00
            </span>
            <Icons class="fa-solid fa-cart-shopping" />
          </div>
        </div>

        <div className="third_header">
          <p>
            Your style, your way — pick any design, any color & add custom
            embroidery. All made to order ♡
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
