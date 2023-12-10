import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterBuilder from './App.router';

const App = () => {
	const isLogin = false;
	const routes = useMemo(() => RouterBuilder(isLogin), [isLogin]);

	return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default App;
