import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { context } from "../../lib/Context"
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
                const { data } = await axios.get(`https://dashboard.botghost.com/api/public/tools/user_lookup/${user.id}`);
                previous = { values: [...previous.values, { name: data.global_name, social: data.username, role: user.role }] }
            }
            setParsed(previous);
            setLoading(false);
        })()
    }, []);

    return (
        <div className="flex flex-col gap-2 items-center w-[calc(100%-100px)] justify-center border-t border-b border-primary p-6 rounded-lg">
            <header className="text-2xl font-bold"># Credits</header>
            {parsed.values.length ? parsed.values.map((person) => (
                <div key={person.social} className="opacity-45 hover:opacity-100 flex flex-col transition-all duration-75 hover:scale-105 cursor-pointer">
                    <span>- {person.name} (@{person.social})</span>
                    <p className="-my-3"><span className="text-xs text-transparent bg-gradient-to-br bg-clip-text from-primary via-accent to-secondary">{`< ${person.role} >`}</span></p>
                </div>
            )) : <LoadingDots />}
            <div></div>
            <div></div>
        </div>
    )
}