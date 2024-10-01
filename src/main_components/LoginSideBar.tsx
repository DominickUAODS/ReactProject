//import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from './LoginSideBar.module.css';
import LoginForm from "./LoginForm";

const LoginSideBar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {

	const modalNode: HTMLElement | null = document.getElementById("modalLoginSidebar");
	const handleModalClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return modalNode ? createPortal(
		<div className="background" onClick={onClose}>
			<div className={`${styles.menusidebar} ${isOpen ? styles.open : ''}`} onClick={handleModalClick}>
				<button className={styles.modal__close} onClick={onClose}>&times;</button>
				<LoginForm />
			</div>
		</div>,
		modalNode
	) : null
};

export default LoginSideBar;
