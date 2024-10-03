import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './RegisterForm.module.css';
import RegisterFormType from '../types/RegisterFormType';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setError,
	} = useForm<RegisterFormType>();

	const navigate = useNavigate();

	const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
		try {
			// Check if email already exists in the db.json
			const emailCheckResponse = await fetch(`http://localhost:3000/users?email=${data.email}`);
			const existingUsers = await emailCheckResponse.json();

			if (existingUsers.length > 0) {
				// Email already exists, set error
				setError('email', {
					type: 'manual',
					message: 'This email is already registered.',
				});
				return;
			}

			// Proceed to register if email does not exist
			const response = await fetch('http://localhost:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Failed to register');
			}

			alert('Registration successful!');
		} catch (err) {
			alert('Error occurred while registering.');
		}
	};

	const watchEmail = watch('email');

	const handleCancel = () => { navigate('/');	};

	return (
		<div className={styles.container}>
			<h2>Створити обліковий запис</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Email */}
				<input
					type="email"
					placeholder="Імейл *"
					{...register('email', { required: 'Email is required' })}
				/>
				{errors.email && <p className={styles.error}>{errors.email.message}</p>}

				{/* Confirm Email */}
				<input
					type="email"
					placeholder="Повторіть електронну пошту *"
					{...register('confirmEmail', {
						required: 'Confirm email is required',
						validate: (value) => value === watchEmail || 'Emails do not match',
					})}
				/>
				{errors.confirmEmail && <p className={styles.error}>{errors.confirmEmail.message}</p>}

				{/* Password */}
				<input
					type="password"
					placeholder="Пароль *"
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters long',
						},
					})}
				/>
				{errors.password && <p className={styles.error}>{errors.password.message}</p>}

				{/* First Name */}
				<input
					type="text"
					placeholder="Ім'я *"
					{...register('firstName', { required: 'First name is required' })}
				/>
				{errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}

				{/* Last Name */}
				<input
					type="text"
					placeholder="Прізвище *"
					{...register('lastName', { required: 'Last name is required' })}
				/>
				{errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}

				{/* Terms and Conditions */}
				<div className={styles.checkbox}>
					<input type="checkbox" {...register('termsAccepted', { required: 'You must accept the terms' })} id="termsAccepted" />
					<label htmlFor="termsAccepted">Прийняти Умови та Положення</label>
				</div>
				{errors.termsAccepted && (
					<p className={styles.error}>{errors.termsAccepted.message}</p>
				)}

				{/* Subscribe to News */}
				<div className={styles.checkbox}>
					<input type="checkbox" {...register('subscribeToNews')} id="subscribeToNews" />
					<label htmlFor="subscribeToNews">Підписатися на наші новини</label>
				</div>

				{/* Submit Button */}
				<button type="submit" className={styles.submitButton}>
					Створити обліковий запис
				</button>

				<button type="button" className={styles.cancelButton} onClick={handleCancel}>
					Скасувати
				</button>

			</form>
		</div>
	);
};

export default RegisterForm;
