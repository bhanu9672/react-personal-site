import React from 'react'

const About = () => {
    return (
        <>
            <section className="p-20" id='about'>
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="flex flex-col gap-5 text-center">
                            <img
                                className="rounded-full bg-gray-50 h-52 w-56 mx-auto"
                                src="https://avatars.githubusercontent.com/u/70773520?s=400&u=ba9dcbf361c98d845115fcb537fc5108dc2e9a13&v=4"
                            />
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-6xl about_sec_title">Bhanu Pratap Singh</h1>
                                <p className="text-gray-500 text-sm">
                                    Senior Full Stack Web Developer (Laravel, Vue, MySql)
                                </p>
                            </div>
                            <a
                                href="#contact"
                                className="bg-gray-50 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white"
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About