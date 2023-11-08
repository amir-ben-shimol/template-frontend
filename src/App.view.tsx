import React, { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouterBuilder from "./App.router";

type TProps = {
	readonly isLogin: boolean;
};

const AppView = (props: TProps) => {
	const routes = useMemo(() => RouterBuilder(props.isLogin), [props.isLogin]);

	return <RouterProvider router={createBrowserRouter(routes)} />;
};

export default React.memo(AppView);
