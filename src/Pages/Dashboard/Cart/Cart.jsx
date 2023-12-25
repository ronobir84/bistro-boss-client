import UseCart from "../../../Hooks/UseCart";

const Cart = () => {
    const [cart] = UseCart();
    return (
        <div>
            <div>
                <h2 className="text-5xl"> My Cart</h2>
            </div>
        </div>
    );
};

export default Cart;