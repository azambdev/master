import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Footer from './components/Footer';
function App() {
  return (
    <> 
    <Particles 
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density:{
              enable:true,
              value_area:900
          }
        },
        shape:{
          type:"square",
          stroke:{
            width:6,
            color:"#f9ab00"
          }

        }
      }

    }}
    
    />     
    <Navbar /> 
    <Header /> 
    <AboutMe /> 
    <Services /> 
    <Experience /> 
    <Footer /> 
    </> 
  );
}

export default App;
