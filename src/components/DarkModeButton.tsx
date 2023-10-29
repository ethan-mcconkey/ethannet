"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

const DarkModeButton = (props: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme !== undefined) {
        setTheme(currentTheme);
    } else {
        setTheme("dark");
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={props.className}
            onClick={() => {
                return theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
        >
            {theme === "dark" ? (
                <BiSun className="navicon group-hover:text-[49px] text-yellow-400" />
            ) : (
                <BiMoon className="navicon group-hover:text-[49px] text-gray-100" />
            )}
        </button>
    );
};

export default DarkModeButton;
