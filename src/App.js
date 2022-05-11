import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(i => {
    return  <Card 
              key={i.id}
              img={`./images/${i.coverImg}`}
              rating={i.stats.rating}
              reviewCount={i.stats.reviewCount}
              location={i.location}
              title={i.title}
              price={i.price}
              openSpots={i.openSpots}
            /> 
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </div>
  )
}