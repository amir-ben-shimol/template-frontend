import React from 'react';

import classes from './Login.module.scss';

type TProps = object;

const LoginView = () => {
	return (
		<section className={classes['container']}>
			<div>login page</div>
			<button type="button" />
		</section>
	);
};

export default React.memo(LoginView);
