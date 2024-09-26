import BottomHeader from "./BottomHeader";
import "./Header.css";
import PreHeader from "./PreHeader";

export default function Header() {
  return (
    <div className="header">
      <PreHeader />
      <div className="main-header">
      <a className="home-button" href = "/">
  <img src="src/assets/img/jysk-logo.svg" width="81" height="37" alt="JYSK" className="logo" />
</a>
<a className="menu-a" href="#">
  <img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-menu.svg" />
  <span>Menu</span>
</a>
<input className="search-input" type="text" placeholder="Search..." />
<a className="like-a" href="#">
  <img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-heart.png" />
  <span>Обране</span>
</a>
<a className="login-a" href="#">
  <img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-login.png" />
  <span>Login</span>
</a>
<a className="cart-a" href="#">
  <img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-cart.png" />
  <span>Cart</span>
</a>
      </div>
      <BottomHeader/>
      </div>
  );
}

