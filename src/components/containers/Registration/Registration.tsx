import React from 'react';

import RegistrationView from './Registration.view';

type TProps = object;

const Registration = (props: TProps) => {
	return <RegistrationView />;
};

export default React.memo(Registration);
