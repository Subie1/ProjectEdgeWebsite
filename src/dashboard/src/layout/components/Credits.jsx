import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { context } from "../../lib/Context";
import LoadingDots from "./LoadingDots";

export default function Credits() {
	const [parsed, setParsed] = useState({ values: [] });
	const { credits, setLoading } = useContext(context);

	useEffect(() => {
		setParsed({ values: [] });
		setLoading(true);
		(async () => {
			let previous = parsed;
			for (const user of credits) {
				const { data } = await axios.get(
					`https://discordlookup.mesavirep.xyz/v1/user/${user.id}`
				);
				previous = {
					values: [
						...previous.values,
						{
							name: data.global_name,
							social: data.tag.split("#")[0],
							role: user.role,
						},
					],
				};
			}

			setParsed(previous);
			setLoading(false);
		})();
	}, []);

	return (
		<div className="flex flex-[0.7_0.7_0%] flex-col md:flex-none gap-10 md:gap-2 items-start md:items-center w-full md:w-[calc(100%-100px)] justify-center border-t border-b border-primary p-6 rounded-lg">
			<header className="text-2xl font-bold text-center w-full"># Credits</header>
			{parsed.values.length ? (
				parsed.values.map((person) => (
					<div
						key={person.social}
						className="opacity-45 hover:opacity-100 flex flex-col transition-all duration-75 hover:scale-105 cursor-pointer"
					>
						<span>
							- {person.name} (@{person.social})
						</span>
						<p className="-my-3">
							<span className="text-xs text-transparent bg-gradient-to-br bg-clip-text from-primary via-accent to-secondary">{`< ${person.role} >`}</span>
						</p>
					</div>
				))
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<LoadingDots />
				</div>
			)}
			<div></div>
			<div></div>
		</div>
	);
}
