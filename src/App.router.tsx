import { lazy } from "react";
import { Navigate, type RouteObject } from "react-router-dom";

import { Routes as RoutesList } from "./Routes";

import AppLayout from "./App.layout";
import { endProgress, startProgress } from "./services/progress-bar";

const LoginPage = lazy(() => import("./pages/Login"));
const RegistrationPage = lazy(() => import("./pages/Registration"));

const RouterBuilder = (isAuthenticated: boolean | null) => {
	const unAuthorizedRoutes: RouteObject[] = [
		{
			path: RoutesList.login,
			element: <LoginPage />,
			loader: async () => {
				startProgress();

				await import("./pages/Login");

				endProgress();

				return null;
			},
		},
		{
			path: RoutesList.registration,
			element: <RegistrationPage />,
			loader: async () => {
				startProgress();

				await import("./pages/Registration");

				endProgress();

				return null;
			},
		},
		{
			path: "*",
			element: <Navigate to={RoutesList.login} replace />,
		},
	];

	const authorizedRoutes: RouteObject[] = [];

	const generalRoutes: RouteObject[] = [];

	let routesChildren = generalRoutes;

	if (isAuthenticated) {
		routesChildren = [...authorizedRoutes, ...generalRoutes];
	}

	if (isAuthenticated === false) {
		routesChildren = [...unAuthorizedRoutes, ...generalRoutes];
	}

	const routes: RouteObject[] = [
		{
			element: <AppLayout />,
			children: routesChildren,
		},
	];

	return routes;
};

export default RouterBuilder;
