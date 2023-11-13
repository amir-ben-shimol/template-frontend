import React, { useRef } from 'react';

import useAppendState from '@/hooks/useAppendState';
import useModal from '@/hooks/useModal';
import classes from './Users.module.scss';

type TUser = {
	readonly id: number;
	readonly name: string;
};

const UsersView = () => {
	const { showModal } = useModal();
	const ref = useRef<HTMLInputElement>(null);

	const [userName, setUserName, onInputChange] = useAppendState<string>('');
	const [users, setUsers, _, appendUsersState] = useAppendState<TUser[] | []>([]);

	const onAddUser = () => {
		if (!userName) return;
		const user = { name: userName, id: Math.random() } as TUser;

		appendUsersState(user);
		setUserName('');
		ref.current?.focus();
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onAddUser();
		}
	};

	const onDeleteUser = (userId: number) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
	};

	const onDeleteUserModal = (user: TUser) => {
		showModal({
			closeOnBackdropClick: false,
			type: 'delete',
			width: '30rem',
			body: <div>{`Are you sure you want to delete ${user.name}?`}</div>,
			onConfirm: () => onDeleteUser(user.id),
		});
	};

	return (
		<div className={classes['container']}>
			<div className={classes['inputContainer']}>
				<input
					ref={ref}
					className={classes['inputContainer__input']}
					placeholder="Name"
					value={userName}
					onChange={onInputChange}
					onKeyDown={onKeyDown}
				/>
				<button className={classes['inputContainer__button']} type="button" onClick={onAddUser}>
					Add User
				</button>
			</div>
			<div className={classes['table']}>
				{users.map((user) => (
					<div key={user.id} className={classes['table__row']}>
						<span className={classes['table__row--cell']}>{user.name}</span>
						<button type="button" onClick={() => onDeleteUserModal(user)}>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default React.memo(UsersView);
