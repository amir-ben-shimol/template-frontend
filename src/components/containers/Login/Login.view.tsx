import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
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
			Click Me to open modal!
			<Outlet />
		</section>
	);
};

export default React.memo(LoginView);
