import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
  const cards = data.map(i => {
    return  <Card 
              img={`./images/${i.coverImg}`}
              rating={i.stats.rating}
              reviewCount={i.stats.reviewCount}
              country={i.location}
              title={i.title}
              price={i.price}
            /> 
  })
  return (
    <div>
      <Navbar />
      <Hero />
      { cards }
    </div>
  )
}