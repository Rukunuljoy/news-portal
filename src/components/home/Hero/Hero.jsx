import { useState } from "react"
import { hero } from "../../../../fakeData"
import { Card } from "./Card";
import './Hero.css'


export const Hero = () => {
    const [items, setItems] = useState(hero)
    console.log(setItems);
  return (
    <>
    <section className="hero">
        <div className="container">
            {items.map((item)=>{
                return <Card key={item.id} item={item}/>
            })}
        </div>
    </section>
    </>
  )
}
