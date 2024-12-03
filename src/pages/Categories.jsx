import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/style.css";
import Header from "../components/Header";

function Categories() {
  const [сategories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchcategories() {
      try {
        const response = await axios.get(
          "https://81502786828f8eed.mokky.dev/cateries"
        );
        setCategories(response.data);
      } catch (error) {}
    }
    fetchcategories();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <div class="category">
          <div class="category-word">Категории</div>
        </div>
        {сategories.map((category, index) => (
          
            <div className="card">
            <Link>
              <div key={index} className="card-grid">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="card-grid-image"
                />
                <div className="card-grid-item">{category.title}</div>
              </div>
              </Link>
            </div>
    
        ))}

        {/* <div class="card">
                    {/* <div class="card-grid">
                        <img src={all} class="card-grid-image"/>
                        <div class="card-grid-item">Все новости</div>
                    </div> */}

        {/* <div class="card-grid">
                        <img src={basketball} class="card-grid-image"/>
                        <div class="card-grid-item">Баскетбол</div>
                    </div>
                    <div class="card-grid">
                        <img src={ragby} class="card-grid-image"/>
                        <div class="card-grid-item">Регби</div>
                    </div>
                    <div class="card-grid">
                        <img src={hockey} class="card-grid-image"/>
                        <div class="card-grid-item">Хоккей</div>
                    </div>
                    <div class="card-grid">
                        <img src={cybersport} class="card-grid-image"/>
                        <div class="card-grid-item">Киберспорт</div>
                    </div>
                    <div class="card-grid">
                        <img src={box} class="card-grid-image"/>
                        <div class="card-grid-item">Бокс</div>
                    </div>
                    <div class="card-grid">
                        <img src={mix} class="card-grid-image"/>
                        <div class="card-grid-item">Mix Fight</div>
                    </div> */}
        {/* </div> */}
      </main>
    </div>
  );
}

export default Categories;
