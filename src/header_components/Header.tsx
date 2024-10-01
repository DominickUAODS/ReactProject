import { useState } from "react";
import BottomHeader from "./BottomHeader";
import "./Header.css";
import PreHeader from "./PreHeader";
import MenuSideBar from "../main_components/MenuSideBar";
import LoginSideBar from "../main_components/LoginSideBar";

export default function Header() {
	// menu
	const [isMenuSidebarOpen, setMenuSidebarOpen] = useState(false);
	const toggleMenuSidebar = () => { setMenuSidebarOpen(!isMenuSidebarOpen); };
	const closeMenuSidebar = () => { setMenuSidebarOpen(false); };

	// login
	const [isLoginSidebarOpen, setLoginSidebarOpen] = useState(false);
	const toggleLoginSidebar = () => { setLoginSidebarOpen(!isLoginSidebarOpen); };
	const closeLoginSidebar = () => { setLoginSidebarOpen(false); };
	//
	return (
		<div className="header">
			<PreHeader />
			<div className="main-header">
				<a className="home-button" href="/">
					<img src="src/assets/img/jysk-logo.svg" width="81" height="37" alt="JYSK" className="logo" />
				</a>
				<a className="menu-a" href="#" onClick={toggleMenuSidebar}>
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-menu.svg" />
					<span>Меню</span>
				</a>
				<input className="search-input" type="text" placeholder="Search..." />
				<a className="like-a" href="#">
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-heart.png" />
					<span>Обране</span>
				</a>
				<a className="login-a" href="#" onClick={toggleLoginSidebar}>
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-login.png" />
					<span>Вхід</span>
				</a>
				<a className="cart-a" href="#">
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src="src/assets/img/icon-cart.png" />
					<span>Кошик</span>
				</a>
			</div>
			<BottomHeader />
			<MenuSideBar isOpen={isMenuSidebarOpen} onClose={closeMenuSidebar} />
			<LoginSideBar isOpen={isLoginSidebarOpen} onClose={closeLoginSidebar} />
		</div>
	);
}
