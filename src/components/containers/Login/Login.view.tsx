/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { Routes } from 'src/Routes';
import { classNames } from '@/utils/component';

import useModal from '@/hooks/useModal';
import classes from './Login.module.scss';

type TProps = object;

const LoginView = () => {
	const { showModal } = useModal();

	console.log('backend url', import.meta.env.VITE_BACKEND_URL);

	const onOpenAnotherModal = () => {
		showModal({
			closeOnBackdropClick: false,
			type: 'confirm',
			confirmText: 'Yazif confirm',
			body: <div>another modal</div>,
			onConfirm: () => console.log('confirm'),
			onCancel: () => console.log('cancel'),
		});
	};

	const onOpenModal = () => {
		showModal({
			width: '50rem',
			onConfirm: () => console.log('confirm'),
			body: (
				<button type="button" onClick={onOpenAnotherModal}>
					open another modal
				</button>
			),
		});
	};

	const onNavToOtp = () => {
		return <Navigate to={Routes.login.otp} />;
	};

	return (
		<section className={classes['container']}>
			<button type="button" onClick={onOpenModal}>
				Click Me to open modal!
			</button>
			{/* <Link to={Routes.login.otp}>
				<span className={classes['benshi']}>as</span>
			</Link> */}

			<Outlet />
		</section>
	);
};

export default React.memo(LoginView);
