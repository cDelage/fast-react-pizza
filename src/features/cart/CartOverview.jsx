import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const pizzaCount = useSelector(getTotalQuantity);
  const pizzaCost = useSelector(getTotalPrice);

  if (!pizzaCount) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaCount} pizzas</span>
        <span>${pizzaCost}</span>
      </p>
      <Link to="/cart">Open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
