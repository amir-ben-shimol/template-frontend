import React from 'react';

import classes from './Login.module.scss';

type TProps = object;

const LoginView = () => {
	console.log('backend url', import.meta.env.VITE_BACKEND_URL);

	return (
		<section className={classes['container']}>
			<div>login page</div>
		</section>
	);
};

export default React.memo(LoginView);
