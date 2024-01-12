import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="relative w-full">
                <div className="relative bg-yellow-50">
                    <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
                        <div className="flex items-center flex-wrap px-2 md:px-0">
                            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                                    Hi There
                                </h1>
                                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                                    I'm Bhanu Pratap Singh
                                </h1>
                                <div className="w-full mt-12">
                                    
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                                        >
                                            <span className="hidden text-yellow-900 font-semibold md:block">
                                                More About Me
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 mx-auto text-yellow-900 md:hidden"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                                        >
                                            <span className="hidden text-yellow-900 font-semibold md:block">
                                                Contact Me
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 mx-auto text-yellow-900 md:hidden"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </button>
                                        <h4 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                                    Web Designer based In New York
                                    </h4>
                                </div>
                                <p className="mt-8 text-gray-700 lg:w-10/12">
                                    Sit amet consectetur adipisicing elit.{" "}
                                    <a href="#" className="text-yellow-700">
                                        connection
                                    </a>{" "}
                                    tenetur nihil quaerat suscipit, sunt dignissimos.
                                </p>
                            </div>
                            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                                <img
                                    src="https://avatars.githubusercontent.com/u/70773520?s=400&u=ba9dcbf361c98d845115fcb537fc5108dc2e9a13&v=4"
                                    className="relative bg-gray-50 h-96 w-96 mx-auto"
                                    alt="Profile Image"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero