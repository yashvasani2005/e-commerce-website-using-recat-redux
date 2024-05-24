import { useSelector } from "react-redux";
import Carditem from "../components/Carditem";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Cart.css"; // Import the CSS file

function Cart() {
    const { cart } = useSelector((state) => state);
    const [totalamount, settotalamount] = useState(0);

    useEffect(() => {
        settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
        <div className="cart-container">
            {cart.length > 0 ? (
                <div className="cart-items">
                    {cart.map((item, index) => {
                        return <Carditem item={item} key={item.id} itemindex={index} />;
                    })}
                </div>
            ) : (
                <div className="empty-cart">
                    <h1>Cart is Empty</h1>
                    <NavLink to={"/"}>
                        <button>Shop Now</button>
                    </NavLink>
                </div>
            )}

            <div className="cart-summary">
                <div className="cart-heading">Your Cart</div>
                <div className="summary-heading">Summary</div>
                <p>
                    <span>Total Items: {cart.length}</span>
                </p>
                <p>Total Amount: {totalamount}</p>
                <button>Check Out Now</button>
            </div>
        </div>
    );
}

export default Cart;
