import React from "react";
import { NavLink } from "react-router-dom";

import { Routes } from "../../../Routes";
import { concatClasses } from "../../../utils/component";

import classes from "./Header.module.scss";

const HeaderView = () => {
	return (
		<div className={classes["container"]}>
			<NavLink className={({ isActive }) => concatClasses(classes, "container__link", isActive ? "container__link--active" : "")} to={Routes.login}>
				Login
			</NavLink>
			<NavLink className={({ isActive }) => concatClasses(classes, "container__link", isActive ? "container__link--active" : "")} to={Routes.registration}>
				Registration
			</NavLink>
		</div>
	);
};

export default React.memo(HeaderView);
