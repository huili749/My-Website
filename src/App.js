import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import ComputationalProjects from './pages/ComputationalProjects';
import UrbanProjects from './pages/UrbanProjects';
import Research from './pages/Research';
import ArchitecturalProjects from './pages/ArchitecturalProjects';
import Projectdetail from './pages/Projectdetail';
import Projects from './components/Projects';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/computationalprojects' element={<ComputationalProjects />} />
        <Route path='/urbanprojects' element={<UrbanProjects />} />
        <Route path='/architecturalprojects' element={<ArchitecturalProjects />} />
        <Route path='/research' element={<Research />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<Projectdetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
