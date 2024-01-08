import { useContext } from "react";
import { context } from "../../lib/Context";

export default function NavElement({ current, message, href, click }) {
    const { page, setPage } = useContext(context);

    return (
			<a
                href={href ?? "#"}
				onClick={() => { click ? click() : ""; setPage(current); }}
				className="flex items-center cursor-pointer relative group py-1 px-2 rounded-md justify-center gap-2"
			>
				<div
					className={`w-2 h-2 bg-primary transition-all duration-400 ${
						page === current ? "" : "scale-0 group-hover:scale-100"
					} rounded-full`}
				></div>
				<span>{message}</span>
				<div
					className={`hidden md:block z-10 rounded-md absolute top-0 left-0 w-full h-full transition-all duration-500 ${
						page === current
							? "opacity-40 group-hover:opacity-50"
							: "opacity-0 group-hover:opacity-20"
					} bg-gradient-to-br from-secondary to-70% to-primary`}
				></div>
				<div
					className={`hidden md:block z-10 rounded-md absolute top-0 left-0 w-full h-full transition-all duration-300 ${
						page === current
							? "opacity-50 group-hover:opacity-60"
							: "opacity-0 group-hover:opacity-30"
					} border-r border-r-primary`}
				></div>
			</a>
		);
}