import { useState, useEffect } from "react";

export default function useDevice() {
    const [device, setDevice] = useState("Unknown");

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (/Android/i.test(userAgent)) {
            setDevice("Android");
        } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
            setDevice("IOS");
        } else if (/Mac OS X/i.test(userAgent)) {
            setDevice("MacOS");
        } else if (/Windows/i.test(userAgent)) {
            setDevice("Windows");
        } else if (/Linux/i.test(userAgent)) {
            setDevice("Linux");
        } else {
            setDevice("Windows");
        }
    }, []);

    return device;
}