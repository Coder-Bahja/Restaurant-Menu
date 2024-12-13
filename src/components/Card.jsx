import React from 'react'
import ProductCard from './ProductCard'

import burger from '../Assets/burger.jpg'
import salad from'../Assets/salad.jpg' 
import meatball from '../Assets/meatball.jpg'



const Card = () => {
  return (
    <div className="product">
        <ProductCard
        image = {burger}
        name = "Burger"
        dis_price = '$5.50'
        price = "$6.65"
        description = 'Eat Burger'
        />
        <ProductCard
        image = {salad}
        name = "Salad"
        dis_price = '$3.50'
        price = "$4.65"
        description = 'Eat Salad'
        />
        <ProductCard
        image = {meatball}
        name = "MeatBall"
        dis_price = '$8.50'
        price = "$6.65"
        description = 'Eat MeatBall'
        />
    </div>
  )
}

export default Card