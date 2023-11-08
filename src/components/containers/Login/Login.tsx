import React from 'react';

import LoginView from './Login.view';

type TProps = object;

const Login = (props: TProps) => {
	return <LoginView />;
};

export default React.memo(Login);
