import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PreHeader.css";



export default function PreHeader() {
	const [currentLink, setCurrentLink] = useState<{ link: string; name: string }>({
		link: "/onsale",
		name: "ЗНИЖКИ! ЗНИЖКИ! ЗНИЖКИ!",
	});

	const links = [
		{ link: "/onsale", name: "ЗНИЖКИ! ЗНИЖКИ! ЗНИЖКИ!" },
		{ link: "/lowprice", name: "ЗАВЖДИ НИЗЬКА ЦІНА ПРЯМО ТУТ" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentLink((prevLink) =>
				prevLink.link === "/onsale" ? links[1] : links[0]
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="pre-header">
			<Link to={currentLink.link} className="pre-header-info animate">
				<span className="pre-header-info-text">{currentLink.name}</span>
				<img className="svg-w3-wishlist v-2" role="img" aria-hidden="true" width="20" height="20" aria-label="" src="src/assets/img/icon-white-arrow-right.png"></img>
			</Link>
		</div>
	);
}
