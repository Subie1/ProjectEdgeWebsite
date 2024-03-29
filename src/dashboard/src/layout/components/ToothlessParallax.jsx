import { useContext } from "react";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";
import { context } from "../../lib/Context";

export default function ToothlessParallax({ sitting, disabled, className }) {
	const { theme } = useContext(context);

	return (
		<MouseParallaxContainer
			className={`parallax w-full scale-125 h-full ${
				theme === "dark" ? "opacity-20" : "opacity-75"
			}`}
			globalFactorX={disabled ? 0 : 0.4}
			globalFactorY={disabled ? 0 : 0.4}
			resetOnLeave
		>
			<MouseParallaxChild
				factorX={disabled ? 0 : 0.3}
				factorY={disabled ? 0 : 0.3}
				className="flex items-center justify-center w-auto h-full relative"
			>
				<img
					className={className ?? "scale-125"}
					src={
						sitting
							? "/assets/sitting.png"
							: "/assets/toothless.png"
					}
					alt=""
				/>
			</MouseParallaxChild>
		</MouseParallaxContainer>
	);
}