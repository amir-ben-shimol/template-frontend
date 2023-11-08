import React from 'react';

import classes from './Otp.module.scss';

type TProps = object;

const OtpView = () => {
	return (
		<div className={classes['container']}>
			<span className={classes['benshi']}>Otp Container</span>
		</div>
	);
};

export default React.memo(OtpView);
