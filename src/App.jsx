import React from 'react';
import { NavBar } from './components/navBar.jsx'
import { About } from './components/about.jsx';
import { Projects } from './components/projects.jsx';
import { Skills } from './components/skills.jsx';
import { Contact } from './components/contact.jsx';
import { Footer } from './components/footer.jsx';

function App() {

  return (
    <>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
