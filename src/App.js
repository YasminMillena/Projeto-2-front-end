
import './App.css';
import Card from './componentes/Card';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Background from "../src/assets/imagens/Background pattern (1).png";




function App() {
  return (
    <div className="App">
      <Header/>     
      {/* <img src={Background} alt="background" /> */}

      <div className='bg'
      >

      <div className='card-list'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
       <Footer/>
    </div>
      </div>
  );
}

export default App;
