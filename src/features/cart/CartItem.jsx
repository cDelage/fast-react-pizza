import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { removeItem } from "./cartSlice";
import UpdatePizzaQuantity from "./UpdatePizzaQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeItem(pizzaId));
  };

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <UpdatePizzaQuantity pizzaId={pizzaId} quantity={quantity}/>
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleRemoveCart}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
