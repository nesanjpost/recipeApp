import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CardButton = ({ recipe }) => {
    const {cart, addToCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    const cartItem = cart.find((item) => item.id === recipe.id);
return (
    cartItem ? (
        <div className="d-flex w-100 m-auto align-items-center shadow justify-content-center bg-danger text-light rounded-3">
            <span className="btn fw-bold text-light" onClick={() => decreaseQuantity(recipe.id)}>
                {cartItem.quantity === 1 ? <small><i className=" bi bi-trash-fill"></i></small> : "-"}
            </span>
            <span className="mx-2">{cartItem.quantity}</span>
            <span className="btn fw-bold text-light" onClick={() => increaseQuantity(recipe.id)}>+</span>
        </div>
    ) : (
        <button className="btn btn-danger d-flex w-100 justify-content-center m-auto shadow text-light rounded-3" onClick={() => addToCart(recipe)}>
            Add to Cart
        </button>
    )
)
}
