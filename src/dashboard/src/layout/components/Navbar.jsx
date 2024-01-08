import { useContext } from "react";
import { context } from "../../lib/Context";
import Icon from "./Icons";

export default function Navbar() {
	const { page, setPage, theme, setTheme } = useContext(context);

	return (
		<nav className="w-full flex p-3 gap-2 md:p-0 flex-wrap items-center justify-center md:justify-between">
			<a
				onClick={() =>
					theme === "dark" ? setTheme("light") : setTheme("dark")
				}
				className="cursor-pointer md:hidden"
			>
				<Icon
					name={theme === "dark" ? "TbSun" : "TbMoon"}
					className="fill-text text-2xl"
				/>
			</a>
			<div className="items-center justify-center gap-2 hidden md:flex bg-opacity-100">
				<a
					onClick={() => setPage(0)}
					className="rounded-xl cursor-pointer relative after:transition-all after:duration-200 after:w-full after:h-full after:absolute after:rounded-xl after:shadow-lg after:opacity-0 after:shadow-primary hover:after:opacity-20 transition-all opacity-100 duration-200 bg-primary text-background px-4 py-2 flex items-center justify-center"
				>
					<span className="z-20 tracking-widest">Project Edge</span>
				</a>
				<a
					onClick={() =>
						theme === "dark" ? setTheme("light") : setTheme("dark")
					}
					className="cursor-pointer"
				>
					<Icon
						name={theme === "dark" ? "TbSun" : "TbMoon"}
						className="fill-text text-2xl"
					/>
				</a>
			</div>
			<div className="flex items-center justify-center bg-opacity-100 gap-2 md:gap-10 tracking-widest text-xs font-semibold">
				<a
					onClick={() => setPage(0)}
					className={`cursor-pointer relative transition-all rounded-xl duration-200 bg-primary text-background px-4 py-2 flex items-center justify-center ${
						page === 0
							? "opacity-100 after:w-full after:h-full after:absolute after:rounded-xl after:shadow-lg after:shadow-primary after:opacity-20"
							: "opacity-50 hover:opacity-60"
					}`}
				>
					<span className="z-20 tracking-widest">Home</span>
				</a>
				<a
					onClick={() => setPage(1)}
					className={`cursor-pointer relative transition-all rounded-xl duration-200 bg-primary text-background px-4 py-2 flex items-center justify-center ${
						page === 1
							? "opacity-100 after:w-full after:h-full after:absolute after:rounded-xl after:shadow-lg after:shadow-primary after:opacity-20"
							: "opacity-50 hover:opacity-60"
					}`}
				>
					<span className="z-20 tracking-widest">Downloads</span>
				</a>
				<a
					href={import.meta.env.VITE_DISCORD_INVITE}
					className="cursor-pointer transition-all rounded-xl duration-200 bg-primary text-background px-4 py-2 flex items-center opacity-60 justify-center"
				>
					<span className="z-20 tracking-widest">Support</span>
				</a>
			</div>
		</nav>
	);
}
