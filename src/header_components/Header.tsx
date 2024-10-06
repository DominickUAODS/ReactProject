import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomHeader from "./BottomHeader";
import "./Header.css";
import PreHeader from "./PreHeader";
import MenuSideBar from "../main_components/MenuSideBar";
import LoginSideBar from "../main_components/LoginSideBar";
import logo from "../assets/img/jysk-logo.svg"
import iconMenu from "../assets/img/icon-menu.svg";
import iconHeart from "../assets/img/icon-heart.png";
import iconLogin from "../assets/img/icon-login.png";
import iconCart from "../assets/img/icon-cart.png";

export default function Header() {
	// menu
	const [isMenuSidebarOpen, setMenuSidebarOpen] = useState(false);
	const toggleMenuSidebar = () => { setMenuSidebarOpen(!isMenuSidebarOpen); };
	const closeMenuSidebar = () => { setMenuSidebarOpen(false); };

	// login
	const [isLoginSidebarOpen, setLoginSidebarOpen] = useState(false);
	const toggleLoginSidebar = () => { setLoginSidebarOpen(!isLoginSidebarOpen); };
	const closeLoginSidebar = () => { setLoginSidebarOpen(false); };

	// Поиск
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	// Обработка формы поиска
	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			navigate(`/search?query=${searchQuery}`);
		}
	};

	return (
		<div className="header">
			<PreHeader />
			<div className="main-header">
				<a className="home-button" href="/">
					<img src={logo} width="81" height="37" alt="JYSK" className="logo" />
				</a>
				<a className="menu-a" href="#" onClick={toggleMenuSidebar}>
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src={iconMenu} />
					<span>Меню</span>
				</a>

				<form className="search-form" onSubmit={handleSearchSubmit}>
					<input className="search-input" type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
					<button type="submit">Пошук</button>
				</form>
				
				<a className="like-a" href="#">
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src={iconHeart} />
					<span>Обране</span>
				</a>
				<a className="login-a" href="#" onClick={toggleLoginSidebar}>
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src={iconLogin} />
					<span>Вхід</span>
				</a>
				<a className="cart-a" href="/category/:categoryId/:productId/details">
					<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="24" height="24" aria-label="" src={iconCart} />
					<span>Кошик</span>
				</a>
			</div>
			<BottomHeader />
			<MenuSideBar isOpen={isMenuSidebarOpen} onClose={closeMenuSidebar} />
			<LoginSideBar isOpen={isLoginSidebarOpen} onClose={closeLoginSidebar} />
		</div>
	);
}
