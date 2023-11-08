import React, { type CSSProperties } from "react";

import { concatDiverseClasses } from "@/utils/component";
import icons from "@/images/icons";

import classes from "./USvg.module.scss";

type TProps = {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: VoidFunction;
};

const USvgView = (props: TProps) => {
	const svgClasses = concatDiverseClasses(classes["container"], props.className);

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		props.onClick!();
	};

	return (
		<svg
			style={props.style}
			className={svgClasses}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={"0 0 " + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? "" }}
			onClick={props.onClick && clickHandler}
		/>
	);
};

export default React.memo(USvgView);
