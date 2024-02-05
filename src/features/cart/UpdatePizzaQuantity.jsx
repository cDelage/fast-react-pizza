import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreasePizzaQuantity, increasePizzaQuantity } from "./cartSlice"

function UpdatePizzaQuantity({pizzaId, quantity}) {
    const dispatch = useDispatch()

    const handleAddPizza = () => {
        dispatch(increasePizzaQuantity(pizzaId))
    }

    const handleRemovePizza = () => {
        dispatch(decreasePizzaQuantity(pizzaId))
    }

    return (
        <div className="flex items-center gap-2">
            <Button type="rounded" onClick={handleRemovePizza}>-</Button>
            <p>{quantity}</p>
            <Button type="rounded" onClick={handleAddPizza}>+</Button>
        </div>
    )
}

export default UpdatePizzaQuantity
