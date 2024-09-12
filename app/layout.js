"use client";
import Navbar from "../components/Navbar";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, useTheme} from 'next-themes'
import { BsMoonStarsFill } from "react-icons/bs";


export default function RootLayout({ children }) {
  const { theme, setTheme } = useTheme();
  const handleThemeToggle = () => {
    console.log("current theme : ", theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    console.log(`Switching theme to ${newTheme}`); // Print the theme change to the console
    setTheme(newTheme); // Toggle the theme
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class"> {/* Wrap the app in ThemeProvider */}
          <div>
            <Navbar />
            {children}
            <div className="bg-white dark:bg-black fixed bottom-2 right-2 text-base p-2">
                <div onClick={handleThemeToggle} className=" bg-black dark:bg-white rounded-lg shadow-lg p-2 hover:text-lg transition duration-50 delay-50 cursor-pointer">
                    <BsMoonStarsFill className=" text-white dark:text-black"/>
                </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
