import resume from "./resume.pdf"
const Header = () => {
    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch(resume).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = resume;
                alink.click();
            });
        });
    };
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
                        <button
                            className="px-5 py-1  rounded-full ring-1 bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300"
                            onClick={onButtonClick}
                        >
                            Get Resume
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header