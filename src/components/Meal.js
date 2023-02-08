const Meal = ({ meal }) => {
  return (
    <article>
      <div className="meal-container">
        <p className="meal-title">{meal.title}</p>
        <p className="meal-description">{meal.description}</p>
        <div className="price-popular-container">
          <p className="meal-price">{meal.price} €</p>
          <div className="meal-popular">
            {meal.popular && <p> * populaire</p>}
          </div>
        </div>
      </div>
      <div className="meal-picture">
        {meal.picture && <img src={meal.picture} alt="meal" />}
      </div>
    </article>
  );
};
export default Meal;
