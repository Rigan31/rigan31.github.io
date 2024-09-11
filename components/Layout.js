import Navbar from "./Navbar";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Layout = ({ children}) => {
    
    const { theme, setTheme } = useTheme();
    return ( 
        <div>
            <Navbar />
            {children}

            <div className="bg-white dark:bg-black fixed bottom-2 right-2 text-base p-2">
                <div onClick={()=> setTheme(theme == 'dark' ? 'light' : 'dark') } className=" bg-black dark:bg-white rounded-lg shadow-lg p-2 hover:text-lg transition duration-50 delay-50 cursor-pointer">
                    <BsMoonStarsFill className=" text-white dark:text-black"/>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;