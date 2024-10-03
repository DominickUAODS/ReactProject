import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import LoginFormType from "../types/LoginFormType";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
	const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<LoginFormType>();
	const [showPassword, setShowPassword] = useState(false);
	const [loginError, setLoginError] = useState("");
	const navigate = useNavigate();

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email) || "Невірний формат email";
	};

	const onSubmit = async (data: LoginFormType) => {
		clearErrors();
		setLoginError("");

		try {
			const response = await fetch(`http://localhost:3000/users?email=${data.email}&password=${data.password}`);
			const users = await response.json();

			if (users.length === 0) {
				setLoginError("Невірний email або пароль");
			} else {
				alert("Вхід успішний");
				console.log("Вхід успішний", users[0]);
				localStorage.setItem("user", JSON.stringify(users[0]));
			}
		} catch (error) {
			setLoginError("Помилка при спробі входу. Спробуйте пізніше.");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
			<h2>Вхід</h2>

			<div className={styles.inputGroup}>
				<label htmlFor="email">Імейл *</label>
				<input
					type="email"
					id="email"
					{...register("email", {
						required: "Це поле обов\"язкове",
						validate: validateEmail
					})}
					className={errors.email ? styles.errorInput : ""}
				/>
				{errors.email && <div className={styles.error}>{errors.email.message}</div>}
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="password">Пароль *</label>
				<div className={styles.passwordWrapper}>
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						{...register("password", {
							required: "Це поле обов\'язкове",
							minLength: { value: 6, message: "Пароль повинен містити щонайменше 6 символів" }
						})}
						className={errors.password ? styles.errorInput : ""}
					/>
					<button type="button" onClick={() => setShowPassword(!showPassword)} className={styles.showPasswordButton}>{showPassword ? "Сховати " : "Показати"}</button>
				</div>
				{errors.password && <div className={styles.error}>{errors.password.message}</div>}
			</div>

			{loginError && <div className={styles.error}>{loginError}</div>}

			<button type="submit" className={styles.loginButton}>Увійти</button>

			<div className={styles.forgotPassword}><a href="#">Забули пароль?</a></div>

			<div>
				<h3>Створити новий обліковий запис</h3>
				<ul>
					<li>Відстежуйте ваші посилки від замовлення до доставки</li>
					<li>Зберігайте історію замовлень</li>
					<li>Додавайте товари до списку бажань</li>
					<li>Зберігайте інформацію для майбутніх покупок</li>
				</ul>
				<button className={styles.createAccountButton} type="button" onClick={() => navigate("/register")}>Створити обліковий запис</button>
			</div>
		</form>
	);
};

export default LoginForm;
