import { useContext } from "react"
import { context } from "../../lib/Context"
import Icon from "./Icons";

export default function Navbar() {
    const { page, setPage, theme, setTheme } = useContext(context);

    return (
        <nav className="w-full flex flex-wrap items-center justify-center md:justify-between">
            <div className="items-center justify-center gap-2 hidden md:flex">
                <a onClick={() => setPage(0)} className="cursor-pointer transition-all opacity-100 duration-200 relative px-4 py-2 flex items-center justify-center">
                    <span className="z-20 tracking-widest text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_50%,var(--text)_50%,var(--text)_100%)]">Project Edge</span>
                    <div className="absolute left-0 w-[50%] h-full bg-primary"></div>
                </a>
                <a onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} className="cursor-pointer"><Icon name={theme === "dark" ? "TbSun" : "TbMoon"} className="fill-text text-2xl" /></a>
            </div>
            <div className="flex items-center justify-center gap-10 tracking-widest text-xs font-semibold">
                <a onClick={() => setPage(0)} className={`cursor-pointer transition-all duration-200 relative px-4 py-2 flex items-center justify-center ${page === 0 ? "opacity-100" : "opacity-50 hover:opacity-60"}`}>
                    <span className="z-20 tracking-widest text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_50%,var(--text)_50%,var(--text)_100%)]">Home</span>
                    <div className="absolute left-0 w-[50%] h-full bg-primary"></div>
                </a>
                <a onClick={() => setPage(1)} className={`cursor-pointer transition-all duration-200 relative px-4 py-2 flex items-center justify-center ${page === 1 ? "opacity-100" : "opacity-50 hover:opacity-60"}`}>
                    <span className="z-20 tracking-widest text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_50%,var(--text)_50%,var(--text)_100%)]">Downloads</span>
                    <div className="absolute left-0 w-[50%] h-full bg-primary"></div>
                </a>
                <a href={import.meta.env.VITE_DISCORD_INVITE} className="cursor-pointer transition-all duration-200 relative px-4 py-2 flex items-center justify-center">
                    <span className="z-20 tracking-widest text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_50%,var(--text)_50%,var(--text)_100%)]">Support</span>
                    <div className="absolute left-0 w-[50%] h-full bg-primary"></div>
                </a>
            </div>
        </nav>
    )
}