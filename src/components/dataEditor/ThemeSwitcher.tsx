import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("dark")
    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    useEffect(() => {
        theme === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark")

    }, [theme])

    return (
        <label className="relative inline-flex items-center cursor-pointer mt-[20px]">
            <input type="checkbox" value={theme} className="sr-only peer" onClick={handleTheme}/>
            <div
                className="w-[40px] h-[20px] bg-green peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white dark:after:bg-bg-dark after:rounded-full after:h-[12px] after:w-[12px] after:transition-all peer-checked:bg-green"></div>
            <span className='text-sm ml-[6px]'>Mode</span>
        </label>
    )
}

export default ThemeSwitcher