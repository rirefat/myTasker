import logo from '../../assets/myTasker-logo.png';

const Header = () => {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50 opacity-90">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/" className='flex items-center gap-2'>
                    <img className="h-[45px]" src={logo} alt="myTasker Logo" /> <span className='text-2xl text-[#F5BF42] font-semibold font-mono'>my<span className='text-white'>Tasker</span></span>
                </a>
                {/* <a href="/">
                    <img className="h-[45px]" src={logo} alt="myTasker Logo" />
                </a> */}
            </div>
        </nav>
    );
};

export default Header;