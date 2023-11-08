import React, { type CSSProperties } from "react";

import type icons from "@/images/icons";

import USvgView from "./USvg.view";

type TProps = {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: VoidFunction;
};

const USvg = (props: TProps) => {
	return <USvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick} />;
};

export default React.memo(USvg);
