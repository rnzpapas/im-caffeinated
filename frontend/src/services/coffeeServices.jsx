import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/coffee";

const coffeeServices = () => {
  const[coffeeProducts, setCoffeeProducts] = useState([] || undefined);

  useEffect(() => {
    axios.get(baseURL)
    .then(response => {
        setCoffeeProducts(response.data)
    }).catch(err => {
        console.log(err)
    })
  },[])

  return coffeeProducts
}

export default coffeeServices