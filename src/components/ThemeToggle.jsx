import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleThemeColor = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }
    return (
        <div>
            <button onClick={toggleThemeColor}>
                {" "}
                {isDarkMode ?
                    <Sun className="h-6 w-6 text-yellow-300" />
                    :
                    <Moon className="h-6 w-6 text-blue-900" />}
            </button>
        </div>
    )
}

export default ThemeToggle