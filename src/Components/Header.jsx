const Header = () => {
    return (
        <>
            <header>
                <div className="container mx-auto">
                    <nav className="sm:hidden pt-3 pb-2">
                        <ul className="flex justify-center gap-10">
                            <li className="hover:text-gray-500">
                                <a href="#about">About</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#project">Project</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="justify-between items-center h-10 p-10 hidden sm:flex">
                        <a href="#about" className="logo">
                            Bhanu Pratap Singh
                        </a>
                        {/* menu */}
                        <ul className="flex gap-10">
                            <li className="hover:text-gray-500">
                                <a href="#about">About</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#project">Project</a>
                            </li>
                            <li className="hover:text-gray-500">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <a
                            className="px-5 py-1 bg-gray-50 rounded-full ring-1 ring-gray-100 hover:bg-white"
                            href="#"
                        >
                            Get Resume
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header