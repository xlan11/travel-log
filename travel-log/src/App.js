import React from "react"
import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./components/data"

export default function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            vlogUrl={item.vlogUrl}
        />
    )
  })
  return (
    <div>
      <Header />
      {cards}
    </div>
  )
}

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg
