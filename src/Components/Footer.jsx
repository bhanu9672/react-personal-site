import React from 'react'

const Footer = () => {
	return (
		<>
			<footer className="bg-white rounded-lg shadow m-4">
				<div className="w-full max-w-screen-xxl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<a href="#about" className="logo">
							Bhanu Pratap Singh
						</a>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a href="#about" className="hover:underline me-4 md:me-6">
									About
								</a>
							</li>
							<li>
								<a href="#skills" className="hover:underline me-4 md:me-6">
									Skills
								</a>
							</li>
							<li>
								<a href="#project" className="hover:underline me-4 md:me-6">
									Project
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:underline me-4 md:me-6">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline me-4 md:me-6">
								Get Resume
								</a>
							</li> 
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer