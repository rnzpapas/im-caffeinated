import coffeeServices from "./services/coffeeServices";

function App() {
  let coffeeProducts = coffeeServices()
  return (
    <div className="flex items-center justify-center h-screen gap-4"> 
        {coffeeProducts.length !== 0 ? coffeeProducts.map((data) => {
          return (
            <section className="border border-slate-800 rounded-md p-5 w-56 h-36">
              <section className="flex flex-col items-center mb-5">
                <h1 className="font-semibold">{data.coffee_name}</h1>
                <p>Php {data.coffee_price.toFixed(2)}</p>
              </section>
              <button className="bg-yellow-400 px-4 py-1 rounded-md font-medium w-full"> Try this </button>
            </section>
          )
        }): ""}
    </div>
  )
}

export default App