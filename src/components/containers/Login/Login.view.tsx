import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { Routes } from 'src/Routes';

import classes from './Login.module.scss';

type TProps = object;

const LoginView = () => {
	console.log('backend url', import.meta.env.VITE_BACKEND_URL);
	const onNavToOtp = () => {
		return <Navigate to={Routes.login.otp} />;
	};

	return (
		<section className={classes['container']}>
			<div>login page</div>
			<Link to={Routes.login.otp}>
				<span className={classes['benshi']}>as</span>
			</Link>

			<Outlet />
		</section>
	);
};

export default React.memo(LoginView);
