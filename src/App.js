import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Hero from './Components/Hero';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<About />
			<Skills />
			<Project />
			<Education />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
