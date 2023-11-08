import React from 'react';

import classes from './Registration.module.scss';

type TProps = object;

const RegistrationView = (props: TProps) => {
	return (
		<section className={classes['container']}>
			<div>Registration page</div>
		</section>
	);
};

export default React.memo(RegistrationView);
