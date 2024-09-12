"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { ThemeProvider, useTheme} from 'next-themes'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <ThemeProvider attribute="class"> {/* Wrap the app in ThemeProvider */}
        <div>
          <Navbar />
          {children}
        </div>
      </ThemeProvider>
    </body>
  </html>
  );
}
