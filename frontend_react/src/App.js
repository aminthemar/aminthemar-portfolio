import './App.scss';
import { Edu, Hero, Jobs, Unity, Portfolio, Contacts } from './containers';
import { Navbar, Footer } from './components';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Jobs />
      <Edu />
      <Unity />
      <Portfolio />
      <Contacts />
      <div className='app__flag-margin' />
      <Footer />
    </div>
  );
}

export default App;