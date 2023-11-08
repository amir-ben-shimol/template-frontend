import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

const AppLayout = () => {
	return (
		<Suspense fallback={null}>
			<Header />
			<Outlet />
		</Suspense>
	);
};

export default React.memo(AppLayout);
