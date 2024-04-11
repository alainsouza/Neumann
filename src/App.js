import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Calculate from './components/Calculate';
import Pictures from './components/Pictures';
import Faq from './components/Faq';
import Footer from './components/Footer';
import End from './components/End';

import IsOver18 from './components/IsOver18';
import MoveToTop from './components/MoveToTop';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Products/>
      <Calculate/>
      <Pictures/>
      <Faq/>
      <Footer/>
      <End/>

      <IsOver18/>
      <MoveToTop/>
    </div>
  );
}

export default App;
