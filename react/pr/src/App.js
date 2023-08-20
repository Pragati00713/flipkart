// import logo from './logo.svg';
import './App.css';
import Navigation from './Navbar/Navigation';
import Home from './Home/Home';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Cards from './cards/Cards';
import Info from './Info/Info';



function App() {
  return (
    <div className="App">
     <Navigation />
   <Home />
   <Container />
   <Cards />
   <Info />
 <Footer />

    </div>
  );
}

export default App;
