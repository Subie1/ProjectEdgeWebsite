import { useEffect, useState } from "react";
import { VscTerminalLinux } from "react-icons/vsc";
import useDevice from "../hooks/useDevice"
import Icon from "../layout/components/Icons";

export default function Downloads() {
    const device = useDevice();

    const [page, setPage] = useState(0);
    const [message, setMessage] = useState([]);
    const [urls, setURLs] = useState([]);

    function SetWindows() {
        setPage(0);
        setMessage(["Download for Windows", "Alternative download"]);
        setURLs([import.meta.env.VITE_WINDOWS_DOWNLOAD_1, import.meta.env.VITE_WINDOWS_DOWNLOAD_2]);
    }

    function SetLinux() {
        setPage(1);
        setMessage(["Download for Linux"]);
        setURLs([import.meta.env.VITE_LINUX_DOWNLOAD]);
    }

    function SetMacOS() {
        setPage(2);
        setMessage(["Download for MacOS"]);
        setURLs([import.meta.env.VITE_MACOS_DOWNLOAD]);
    }

    useEffect(() => {
        if (device === "Windows") return SetWindows();
        if (device === "Linux") return SetLinux();
        if (device === "MacOS") return SetMacOS();
        SetWindows();
    }, [device])

    return (
        <main className="w-full overflow-hidden items-center justify-center gap-4 h-full flex flex-col">
            <header className="text-4xl text-center font-bold gap-4 flex items-center justify-center">
                <span>Download</span>
                <span className="relative flex mx-4 items-center justify-center">
                    <span className="tracking-widest">Project</span>
                    <div className="absolute left-full bottom-0 w-4 animate-pulse h-1 bg-gradient-to-br from-primary via-accent to-secondary"></div>
                </span>
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary via-accent to-secondary">Edge</span>
            </header>
            <div className="flex gap-2">
                <div onClick={() => SetWindows()} className={`${page === 0 ? "shadow-md shadow-primary" : ""} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}>
                    <Icon name="TbBrandWindows" className={`${page === 0 ? "fill-text" : ""} text-2xl`} />
                    <span className="text-xs">Windows</span>
                </div>
                <div onClick={() => SetLinux()} className={`${page === 1 ? "shadow-md shadow-primary" : ""} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}>
                    <VscTerminalLinux className={`${page === 1 ? "fill-text" : ""} text-2xl`} />
                    <span className="text-xs">Linux</span>
                </div>
                <div onClick={() => SetMacOS()} className={`${page === 2 ? "shadow-md shadow-primary" : ""} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}>
                    <Icon name="TbBrandApple" className={`${page === 2 ? "fill-text" : ""} text-2xl`} />
                    <span className="text-xs">MacOS</span>
                </div>
                <div className="w-16 opacity-55 h-16 min-w-16 group cursor-pointer min-h-16 relative flex flex-col items-center justify-center rounded-xl border-2 border-primary">
                    <Icon name="TbBrandAndroid" className="text-2xl" />
                    <span className="text-xs">Android</span>
                    <div className="absolute md:top-2 top-16 scale-0 transition-all duration-300 md:left-16 text-xs text-nowrap w-24 group-hover:scale-100 bg-primary rounded-lg p-2 flex-nowrap items-center justify-center">
                        <p className="text-nowrap w-full text-text dark:text-background">Coming Soon!</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    urls.map(url => (
                        <a key={url} className="rounded-xl text-center bg-primary px-4 py-2 text-background" href={url} download>{message[urls.indexOf(url)]}</a>
                    ))
                }
            </div>
        </main>
    )
}