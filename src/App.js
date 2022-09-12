import './App.scss';
import { Edu, Hero, Jobs, Unity, Portfolio, Contacts, Works, Project } from './containers';
import { Navbar, Footer } from './components';
import { Routes, Route } from 'react-router-dom';
import './App.scss'

const HomePage = () => (
  <>
    <Navbar options={true} />
    <Hero />
    <Jobs />
    <Edu />
    <Unity />
    <Portfolio />
  </>
);

const WorksPage = () => (
  <>
    <Navbar />
    <Works />
  </>
);

const ProjectPage = () => (
  <>
    <Navbar />
    <Project />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/works' element={<WorksPage />}></Route>
        <Route path="/works/:id" element={<ProjectPage />} />
      </Routes>
      <Contacts />
      <div className='app__flag-margin' />
      <Footer />
    </div>
  );
}

export default App;