import React from 'react';

import useModal from '@/hooks/useModal';
import classes from './Registration.module.scss';
import Users from './Users';

type TProps = object;

const RegistrationView = (props: TProps) => {
	const { showModal } = useModal();

	const onViewUsers = () => {
		showModal({
			body: <Users />,
		});
	};

	return (
		<section className={classes['container']}>
			<button type="button" onClick={onViewUsers}>
				View users
			</button>
		</section>
	);
};

export default React.memo(RegistrationView);
