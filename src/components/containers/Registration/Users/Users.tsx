import React from 'react';

import UsersView from './Users.view';

type TProps = object;

const Users = () => {
	return <UsersView />;
};

export default React.memo(Users);
