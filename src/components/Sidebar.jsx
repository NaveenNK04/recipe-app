// src/components/Sidebar.jsx
import { Heart, Home, Info, Mail, User } from "lucide-react"; // Import the User icon
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

export default Sidebar;

const DesktopSidebar = () => {
    return (
        <div className='p-10 md:p-10 border-r min-h-screen w-40 md:w-64 hidden sm:block'>
            <div className='flex flex-col gap-20 sticky top-10'>
                <div className='w-full'>
                    <img src='/Brand Logo.svg' alt='logo' className='hidden md:block' />
                    <img src='/mobile-logo.svg' alt='logo' className='block md:hidden' />
                </div>
                <ul className='flex flex-col items-center md:items-start gap-8'>
                    <Link to={"/"} className='flex gap-1'>
                        <Home size={"24"} />
                        <span className='font-bold hidden md:block'>Home</span>
                    </Link>
                    <Link to={"/favorites"} className='flex gap-1'>
                        <Heart size={"24"} />
                        <span className='font-bold hidden md:block'>Favorites</span>
                    </Link>
                    <Link to={"/about"} className='flex gap-1'>
                        <Info size={"24"} />
                        <span className='font-bold hidden md:block'>About</span>
                    </Link>
                    <Link to={"/contact"} className='flex gap-1'>
                        <Mail size={"24"} />
                        <span className='font-bold hidden md:block'>Contact</span>
                    </Link>
                    {/* Add the Famous Chefs link */}
                    <Link to={"/chefs"} className='flex gap-1'>
                        <User size={"24"} />
                        <span className='font-bold hidden md:block'>Famous Chefs</span>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

const MobileSidebar = () => {
    return (
        <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
            <Link to={"/"}>
                <Home size={"24"} className='cursor-pointer' />
            </Link>
            <Link to={"/favorites"}>
                <Heart size={"24"} className='cursor-pointer' />
            </Link>
            <Link to={"/about"}>
                <Info size={"24"} className='cursor-pointer' />
            </Link>
            <Link to={"/contact"}>
                <Mail size={"24"} className='cursor-pointer' />
            </Link>
            {/* Add the Famous Chefs link */}
            <Link to={"/chefs"}>
                <User size={"24"} className='cursor-pointer' />
            </Link>
        </div>
    );
};
