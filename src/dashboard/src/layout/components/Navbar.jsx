import { useContext } from "react";
import Icon from "./Icon";
import NavElement from "./NavElement";
import { context } from "../../lib/Context";

export default function Navbar() {
	const { theme, setTheme } = useContext(context);

	function OpenMenu() {
		const element = document.getElementById("navbar_items");
		element.classList.remove("hidden");
		document.body.classList.add("overflow-hidden");
	}

	function CloseMenu() {
		const element = document.getElementById("navbar_items");
		element.classList.add("hidden");
		document.body.classList.remove("overflow-hidden");
	}

	function ChangeTheme() {
		if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
	}

	return (
		<nav className="w-full h-fit flex items-center justify-between">
			<div className="cursor-pointer relative gap-4 px-2 py-1 group z-20 flex items-center justify-center">
				<div className="text-accent text-2xl group">
					<Icon
						name="TbSword"
						className="scale-110 group-hover:scale-125 transition-all duration-100"
					/>
				</div>
				<a
					href="/"
					className="font-rubik flex gap-2 items-center justify-center tracking-widest font-thin text-lg fill-primary transition-all duration-200"
				>
					Project Edge
				</a>
				<a
					onClick={() => ChangeTheme()}
					className="text-xl cursor-pointer hover:scale-105 duration-200 transition-all"
				>
					<Icon name={theme === "dark" ? "TbSun" : "TbMoon"} />
				</a>
			</div>
			<div
				onClick={() => OpenMenu()}
				className="flex md:hidden px-4 z-30 cursor-pointer py-2 border border-text rounded-full gap-2 items-center justify-center"
			>
				<span>Menu</span>
				<Icon name="TbMenu" className="text-xl" />
			</div>
			<div
				onClick={() => CloseMenu()}
				id="navbar_items"
				className="top-0 left-0 bg-background z-40 md:z-auto md:bg-transparent w-full h-full md:w-fit md:h-fit fixed md:relative hidden flex md:flex flex-col md:flex-row tracking-widest items-center text-sm justify-center gap-10"
			>
				<NavElement click={CloseMenu} current={0} message="Home" />
				<NavElement
					href={import.meta.env.VITE_DISCORD_INVITE}
					current={100}
					message="Support"
				/>
				<NavElement current={1} message="Blogs" />
			</div>
		</nav>
	);
}
