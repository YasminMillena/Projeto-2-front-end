
import React, { useEffect, useState } from "react";
import './App.css';
import Card from './componentes/Card';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="App">
      <Header/>     
     

      <div className='bg'>

       <div className='card-list'>
          {cards.map(card => (
            <Card
              key={card.id}
              category={card.category}
              title={card.title}
              description={card.description}
              author={card.author}
              date={card.date}
              image={card.image}
              avatar={card.avatar}
            />
          ))}
        </div>
       <Footer/>
    </div>
      </div>
  );
}

export default App;
