import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 改为 HashRouter
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
    <Router>
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
    </Router>
  );
}

export default App;
