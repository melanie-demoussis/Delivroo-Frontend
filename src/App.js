import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--delivroo-backend--9k87dyjsgg9s.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="App">
      <div className="header">
        <header>DELIVROOOOO</header>

        <div className="hero-container container">
          <div className="">
            <h1>{data.restaurant.name}</h1>
            <p className="hero-description">{data.restaurant.description}</p>
          </div>

          <img
            className="hero-picture"
            src={data.restaurant.picture}
            alt="meal"
          />
        </div>
      </div>

      <main>
        <div className="container main-part">
          <section className="part-left">
            {data.categories.map((category, index) => {
              if (category.meals.length !== 0) {
                return <Category category={category} key={index} />;
              } else {
                return null;
              }
            })}
          </section>
          <section className="part-right">
            <form>
              <button>Valider le panier</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
