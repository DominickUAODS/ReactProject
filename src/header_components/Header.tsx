import BottomHeader from "./BottomHeader";
import "./Header.css";
import PreHeader from "./PreHeader";

export default function Header() {
  return (
    <div className="header">
      <PreHeader />
      <div className="main-header">
        <button className="home-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jysk_logo.svg/768px-Jysk_logo.svg.png?20220503114541" width="81" height="37" alt="JYSK" className="logo"/></button>
        <button className="menu-button">Menu</button>
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="like-button">Like</button>
        <button className="login-button">Login</button>
        <button className="cart-button">Cart</button>
      </div>
      <BottomHeader/>
      </div>
  );
}

