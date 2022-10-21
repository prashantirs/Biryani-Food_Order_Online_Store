import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealsItems from "./MealItems/MealsItems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Singrauli Chicken Biryani",
    description: "Finest chicken and vegetables",
    price: 270,
  },
  {
    id: "m2",
    name: "Jabalpur Chicken Biryani",
    description: "Loaded with ghee cooked with whole spices",
    price: 290,
  },
  {
    id: "m3",
    name: "Gwalior Chicken Biryani",
    description: "A Gwalior specialty!",
    price: 400,
  },
  {
    id: "m4",
    name: "Chicken Anda Biryani",
    description: "India, the home of biryani",
    price: 300,
  },
  {
    id: "m5",
    name: "Chicken Egg Biryani",
    description: "India, the home of biryani",
    price: 450,
  },
  {
    id: "m6",
    name: "Biryani For HeartBroken",
    description: "Time heals...",
    price: 0,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((e) => <MealsItems key={e.id} id={e.id} name={e.name} desc={e.description} price={e.price}/>);
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
